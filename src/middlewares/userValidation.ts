const userValidation = (username: string) => {
  if (!username) return { code: 400, error: 'Username is required' };
  if (typeof username !== 'string') return { code: 422, error: 'Username must be a string' };
  if (username.length < 3) return { code: 422, error: 'Username must be longer than 2 characters' };
};

const classValidation = (classe: string) => {
  if (!classe) return { code: 400, error: 'Classe is required' };
  if (typeof classe !== 'string') return { code: 422, error: 'Classe must be a string' };
  if (classe.length < 3) return { code: 422, error: 'Classe must be longer than 2 characters' };
};

const levelValidation = (level: number) => {
  if (level === undefined) return { code: 400, error: 'Level is required' };
  if (typeof level !== typeof 0) return { code: 422, error: 'Level must be a number' };
  if (level <= 0) { 
    return { code: 422, error: 'Level must be greater than 0' };
  }
};

const passwordValidation = (password: string) => {
  if (!password) return { code: 400, error: 'Password is required' };
  if (typeof password !== 'string') return { code: 422, error: 'Password must be a string' };
  if (password.length < 8) return { code: 422, error: 'Password must be longer than 7 characters' };
};

const nameValidation = (username: string) => {
  if (!username) return { code: 400, error: 'Name is required' };
  if (typeof username !== 'string') return { code: 422, error: 'Name must be a string' };
  if (username.length < 3) return { code: 422, error: 'Name must be longer than 2 characters' };
};

const amountValidation = (amount:string) => {
  if (!amount) return { code: 400, error: 'Amount is required' };
  if (typeof amount !== 'string') return { code: 422, error: 'Amount must be a string' };
  if (amount.length < 3) return { code: 422, error: 'Amount must be longer than 2 characters' };
  return null;
};

export {
  userValidation,
  classValidation,
  levelValidation,
  passwordValidation,
  amountValidation,
  nameValidation,
};