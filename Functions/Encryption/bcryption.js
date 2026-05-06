import bcrypt from 'bcryptjs';

const saltRounds = 10;

export const hashPass = async (myPassword) => {
  const hashedPassword = await bcrypt.hash(myPassword, saltRounds);
  return hashedPassword;
};

export const comparePass = async (userInput, hashedPassword) => {
  const isMatch = await bcrypt.compare(userInput, hashedPassword);

  return isMatch ? true : false;
};
