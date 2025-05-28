import getColors from 'get-image-colors';

export async function extractColorsFromImage(
  filePath: string,
): Promise<string[]> {
  const colors = await getColors(filePath);
  // Zamień obiekty kolorów na wartości hex
  return colors.map((color: any) => color.hex());
}
