function isObject(value) {
  return typeof value === 'object' && value !== null;
}

/**
 * Returns a new object with only the filled properties from the input object.
 *
 * This function recursively traverses the input object and creates a new object
 * with only the properties that have a non-null, non-undefined, and non-empty
 * string value. It also handles nested objects and arrays, ensuring that only
 * the filled properties are included in the output.
 *
 * @param {Object} obj - The input object to be cleaned.
 * @returns {Object} - A new object with only the filled properties.
 */
export function getOnlyFilled(obj) {
  const seen = new WeakSet();

  function clean(obj) {
    if (!isObject(obj)) {
      return obj;
    }

    if (seen.has(obj)) {
      return Array.isArray(obj) ? [] : {};
    }

    seen.add(obj);

    const cleanedObj = Array.isArray(obj) ? [] : {};

    for (const [key, value] of Object.entries(obj)) {
      if (isObject(value)) {
        const cleanedValue = clean(value);
        if (
          cleanedValue !== undefined &&
          cleanedValue !== null &&
          (isObject(cleanedValue) ? Object.keys(cleanedValue).length > 0 : true)
        ) {
          cleanedObj[key] = cleanedValue;
        }
      } else if (value !== undefined && value !== null && value !== '') {
        cleanedObj[key] = value;
      }
    }

    return cleanedObj;
  }

  return clean(obj);
}

/**
 * Recursively parses a JSON-like string, handling nested objects.
 *
 * @param {string} str - The JSON-like string to parse.
 * @returns {any} The parsed value, or the original string if parsing fails.
 */
export function parseNested(str) {
  try {
    return JSON.parse(str, (_, val) => {
      if (typeof val === 'string') {
        if (val.startsWith('{') && val.endsWith('}')) {
          return parseNested(val);
        } else {
          return val;
        }
      }
      return val;
    });
  } catch (exc) {
    return str;
  }
}
