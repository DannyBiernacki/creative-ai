// Test Agent - przykładowy szablon
const componentName = process.argv[2] || 'BrandButton';

console.log(
  '[Test Agent] Generuję test jednostkowy dla komponentu:',
  componentName,
);

setTimeout(() => {
  const test = `
import { render, screen } from '@testing-library/react';
import { ${componentName} } from './${componentName}';

test('renderuje przycisk z tekstem', () => {
  render(<${componentName}>Kliknij mnie</${componentName}>);
  expect(screen.getByText('Kliknij mnie')).toBeInTheDocument();
});
`;
  console.log('[Test Agent] Wygenerowany test:\n' + test);
}, 1000);
