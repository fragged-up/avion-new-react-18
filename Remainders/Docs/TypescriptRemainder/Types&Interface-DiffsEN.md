# Differences Between Interface and Type in TypeScript

## Key Differences:
1. **Object Definitions**:
   - **`interface`**: Primarily used for defining the shape of objects and allows extension (inheritance).
   - **`type`**: More flexible, allowing the definition of objects, primitive types, unions, and function types.

2. **Extension and Inheritance**:
   - **`interface`**: Supports multiple extensions (can extend other interfaces).
   - **`type`**: Can combine (`&`) several types but doesn't support direct inheritance like `interface`.

3. **Union and Intersection Types**:
   - **`type`**: Easily supports union (`|`) and intersection (`&`) types.
   - **`interface`**: Does not support union types but does support extension and intersection with other interfaces.

4. **Usage Beyond Object Definitions**:
   - **`type`**: More versatile and can define complex types such as tuples or unions of types.
   - **`interface`**: Primarily intended for objects and not suitable for complex union definitions.

5. **Multiple Declarations**:
   - **`interface`**: Supports multiple declarations with the same name, allowing for automatic merging.
   - **`type`**: Does not support multiple declarations of the same name.

## Preferred Usage:
- **`interface`** is preferred when defining object shapes and extensions, due to merging capabilities and inheritance.
- **`type`** is preferred when defining unions, intersections, or complex types that aren't strictly objects.