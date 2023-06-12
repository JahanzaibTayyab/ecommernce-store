import { hash, compare } from "bcrypt";

// Hashes a password using bcrypt
export async function hashPassword(password: string) {
  const saltRounds = 10;
  try {
    const hashedPassword = await hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    throw new Error("Error hashing password");
  }
}

// Compares a password with its hashed version using bcrypt
export async function comparePassword(
  password: string,
  hashedPassword: string
) {
  try {
    const isMatch = await compare(password, hashedPassword);
    return isMatch;
  } catch (error) {
    throw new Error("Error comparing passwords");
  }
}
