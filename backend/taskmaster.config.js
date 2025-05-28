module.exports = {
  // Podstawowa konfiguracja
  project: {
    name: 'creative-ai',
    version: '1.0.0',
    description: 'A creative AI project repository',
  },

  // Automatyzacja zadań
  tasks: {
    // Automatyczne commitowanie
    commit: {
      enabled: true,
      rules: {
        format: 'conventional',
        requireTests: true,
        requireLint: true,
      },
    },

    // Automatyczne testy
    test: {
      enabled: true,
      command: 'npm test',
      watch: true,
    },

    // Automatyczne budowanie
    build: {
      enabled: true,
      command: 'npm run build',
      watch: false,
    },

    // Automatyczne sprawdzanie typów
    typeCheck: {
      enabled: true,
      command: 'tsc --noEmit',
    },
  },

  // Integracja z AI
  ai: {
    enabled: true,
    model: 'gpt-4',
    temperature: 0.7,
    maxTokens: 2000,
    features: {
      codeReview: true,
      documentation: true,
      optimization: true,
    },
  },

  // Integracja z Git
  git: {
    hooks: {
      'pre-commit': true,
      'commit-msg': true,
    },
    branches: {
      main: {
        protection: true,
        requireReviews: true,
      },
    },
  },
};
