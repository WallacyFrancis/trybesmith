import { Request, Response, NextFunction } from 'express';

const messageErrors = {
  nameIsRequired: { error: 'Username is required' }, 
  nameIsString: { error: 'Username must be a string' },
  nameIsShort: { error: 'Username must be longer than 2 characters' },
  classeIsRequired: { error: 'Classe is required' },
  classeIsString: { error: 'Classe must be a string' },
  classeIsShort: { error: 'Classe must be longer than 2 characters' },
  levelIsRequired: { error: 'Level is required' },
  levelIsNumber: { error: 'Level must be a number' },
  levelNotZero: { error: 'Level must be greater than 0' },
  passwordIsRequired: { error: 'Password is required' },
  passordIsString: { error: 'Password must be a string' },
  passwordIsShort: { error: 'Password must be longer than 7 characters' },
};

export const validateName = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;
  const { nameIsRequired, nameIsString, nameIsShort } = messageErrors;
  if (!username) return res.status(400).json(nameIsRequired);
  if (typeof username !== 'string') return res.status(422).json(nameIsString);
  if (username.length < 3) return res.status(422).json(nameIsShort);
  next();
};

export const validateClasse = (req: Request, res: Response, next: NextFunction) => {
  const { classe } = req.body;
  const { classeIsRequired, classeIsString, classeIsShort } = messageErrors;
  if (!classe) return res.status(400).json(classeIsRequired);
  if (typeof classe !== 'string') return res.status(422).json(classeIsString);
  if (classe.length < 3) return res.status(422).json(classeIsShort);
  next();
};

export const validateLevel = (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;
  const { levelIsRequired, levelIsNumber, levelNotZero } = messageErrors;
  if (!level && Number(level) !== 0) return res.status(400).json(levelIsRequired);
  if (typeof level !== 'number') return res.status(422).json(levelIsNumber);
  if (Number(level) <= 0) return res.status(422).json(levelNotZero);
  next();
};

export const valdatePassword = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  const { passwordIsRequired, passordIsString, passwordIsShort } = messageErrors;
  if (!password) return res.status(400).json(passwordIsRequired);
  if (typeof password !== 'string') return res.status(422).json(passordIsString);
  if (password.length < 8) return res.status(422).json(passwordIsShort);
  next();
};
