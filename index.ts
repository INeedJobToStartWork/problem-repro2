/**
 *
 * This is minimal reproduction.
 * @problem `keep-sorted` doesn't copy emojis correctly
 *
 * @example
 * const example = {
 *  apple: "🍏",
 *  orange: "🍊",
 *  banana: "🍌",
 * };
 *
 * @todo fix it
 */

//----------------------------
// ❌ Error (Current state)
//----------------------------

const obj = {
  apple: "🍏",
  banana: "�",
  orange: "�",
};

//----------------------------
// ✅ Expected
//----------------------------

const obj2 = {
  apple: "🍏",
  banana: "🍌",
  orange: "🍊",
};

//----------------------------
// ⌛ SANDBOX
//----------------------------

/// keep-sorted [REMOVE]
const example = {
  apple: "🍏",
  orange: "🍊",
  banana: "🍌",
};
