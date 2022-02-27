const userValidation = (username: string) => {
  if (!username) return { code: 400, error: 'Username is required' };
  if (typeof username !== 'string') return { code: 422, error: 'Username must be a string' };
  if (username.length < 3) return { code: 422, error: 'Username must be longer than 2 characters' };
};

const classValidation = (classe: string) => {
  if (!classe) return { code: 400, error: 'classe is required' };
  if (typeof classe !== 'string') return { code: 422, error: 'Classe must be a string' };
  if (classe.length < 3) return { code: 422, error: 'Classe must be longer than 2 characters' };
};

const levelValidation = (level: number) => {
  if (!level) return { code: 400, error: 'Level is required' };
  if (typeof level !== 'number') return { code: 422, error: 'Level must be a number' };
  if (level <= 0) return { code: 422, error: 'Level must be greater than 0' };
};

const passwordValidation = (password: string) => {
  if (!password) return { code: 400, error: 'Password is required' };
  if (typeof password !== 'string') return { code: 422, error: 'Password must be a string' };
  if (password.length < 8) return { code: 422, error: 'Password must be longer than 7 characters' };
};

export {
  userValidation,
  classValidation,
  levelValidation,
  passwordValidation,
};