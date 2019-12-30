import { bgColors } from '../styles/bgColors';

/**
 * This method returns a random colour from the specified colours
 * @param {string[]} Colors - optional paramused to overide colours to choose from
 * @returns {string} random string
 */
export const randomColor = (Colors = bgColors) => {
  const randomIndex = Math.floor(Math.random() * bgColors.length);
  return Colors[randomIndex];
};
