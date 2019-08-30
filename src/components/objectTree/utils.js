/**
 *
 * @param {Object | String} obj
 * @param {Set} excludes
 * @param {Object} overrides
 * @param {String} rootName
 * @returns {Object}
 */
export function createTreeData(obj, excludes, overrides, rootName) {
  try {
    if (typeof obj === "string") {
      return [traverseObject(JSON.parse(obj), excludes, overrides, rootName)];
    } else {
      return [traverseObject(obj, excludes, overrides, rootName)];
    }
  } catch (error) {
    return [];
  }
}

/**
 *
 * @param {Object} obj
 * @param {Set} excludes
 * @param {Object} overrides
 * @param {String} rootName
 * @param {Boolean} isRoot
 */
function traverseObject(obj, excludes, overrides, name = "") {
  if (typeof obj === "object") {
    let properties = [];

    let objNode = { type: "object", value: "Object", children: [], name };

    if (Array.isArray(obj)) {
      objNode.type = "array";
      objNode.value = `Array(${obj.length})`;
      for (let i = 0; i < obj.length; ++i) {
        properties.push(i);
      }
    } else {
      properties = Object.getOwnPropertyNames(obj).filter(name => !excludes.has(name));
    }

    for (let i = 0; i < properties.length; ++i) {
      let propertyValue = obj[properties[i]];
      let propertyType = typeof propertyValue;

      if (propertyType === "symbol") {
        propertyValue = propertyValue.description;
      } else if (propertyType === "function") {
        propertyValue = "function()";
      } else if (propertyType === "string") {
        propertyValue = `"${propertyValue}"`;
      }

      if (propertyType === "object" && propertyValue) {
        objNode.children.push(traverseObject(propertyValue, excludes, overrides, properties[i]));
      } else {
        if (propertyValue === null || propertyValue === undefined) {
          propertyValue = "null";
          propertyType = "null";
        }
        objNode.children.push({ name: properties[i], value: propertyValue, type: propertyType });
      }
    }
    return objNode;
  }

  return {};
}
