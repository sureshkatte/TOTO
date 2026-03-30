import {GOOGLE_MAPS_API_KEY, hasGoogleMapsApiKey} from '../config/googleMaps';

type Coords = {
  latitude: number;
  longitude: number;
};

type AutocompleteSuggestion = {
  placeId: string;
  text: string;
};

type PlacesAutocompleteResponse = {
  suggestions?: Array<{
    placePrediction?: {
      place?: string;
      placeId?: string;
      text?: {
        text?: string;
      };
    };
  }>;
};

type ReverseGeocodeResponse = {
  results?: Array<{
    formatted_address?: string;
  }>;
  status?: string;
};

const AUTOCOMPLETE_URL = 'https://places.googleapis.com/v1/places:autocomplete';
const REVERSE_GEOCODE_URL = 'https://maps.googleapis.com/maps/api/geocode/json';

export async function fetchPlaceAutocomplete(
  input: string,
  sessionToken: string,
): Promise<AutocompleteSuggestion[]> {
  if (!hasGoogleMapsApiKey()) {
    return [];
  }

  const response = await fetch(AUTOCOMPLETE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': GOOGLE_MAPS_API_KEY,
      'X-Goog-FieldMask':
        'suggestions.placePrediction.place,suggestions.placePrediction.placeId,suggestions.placePrediction.text.text',
    },
    body: JSON.stringify({
      input,
      sessionToken,
      includedRegionCodes: ['in'],
    }),
  });

  if (!response.ok) {
    throw new Error('Unable to fetch place suggestions');
  }

  const data = (await response.json()) as PlacesAutocompleteResponse;

  return (data.suggestions ?? [])
    .map(item => {
      const prediction = item.placePrediction;

      return {
        placeId:
          prediction?.placeId ??
          prediction?.place?.split('/').pop() ??
          prediction?.text?.text ??
          '',
        text: prediction?.text?.text ?? '',
      };
    })
    .filter(item => item.text.length > 0);
}

export async function reverseGeocodeCoords({
  latitude,
  longitude,
}: Coords): Promise<string | null> {
  if (!hasGoogleMapsApiKey()) {
    return null;
  }

  const query = `${REVERSE_GEOCODE_URL}?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_API_KEY}`;
  const response = await fetch(query);

  if (!response.ok) {
    throw new Error('Unable to reverse geocode coordinates');
  }

  const data = (await response.json()) as ReverseGeocodeResponse;

  if (data.status !== 'OK') {
    return null;
  }

  return data.results?.[0]?.formatted_address ?? null;
}

export function createPlacesSessionToken() {
  return `session-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
