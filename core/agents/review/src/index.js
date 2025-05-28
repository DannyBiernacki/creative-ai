// Review Agent - przykładowy szablon
const code = process.argv[2] || 'Brak kodu do analizy';

console.log('[Review Agent] Analizuję kod...');

setTimeout(() => {
  // Przykładowa analiza
  if (code.includes('style={{')) {
    console.log(
      '[Review Agent] Sugestia: Rozważ przeniesienie stylów do klasy CSS dla lepszej skalowalności.',
    );
  } else {
    console.log('[Review Agent] Kod zatwierdzony.');
  }
}, 1000);
