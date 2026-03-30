export function getResponsiveContentWidth(screenWidth: number, variant: 'compact' | 'default' | 'wide' = 'default') {
  if (variant === 'compact') {
    return screenWidth >= 1024 ? 460 : screenWidth >= 768 ? 420 : '100%';
  }

  if (variant === 'wide') {
    return screenWidth >= 1280 ? 880 : screenWidth >= 1024 ? 760 : screenWidth >= 768 ? 680 : '100%';
  }

  return screenWidth >= 1024 ? 680 : screenWidth >= 768 ? 560 : '100%';
}

export function getResponsiveHorizontalPadding(screenWidth: number) {
  if (screenWidth >= 1024) {
    return 40;
  }

  if (screenWidth >= 768) {
    return 32;
  }

  return 24;
}

export function isTabletWidth(screenWidth: number) {
  return screenWidth >= 768;
}
