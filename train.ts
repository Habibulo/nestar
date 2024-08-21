/*
  ZL-TASK:
    Shunday function yozing, u parametrda berilgan stringni 
    kebab casega otkazib qaytarsin. Bosh harflarni 
    kichik harflarga ham otkazsin.
    MASALAN: stringToKebab(“I love Kebab”) return “i-love-kebab”
*/
function stringToKebab(str: string): string {
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2') // Insert a hyphen between lowercase and uppercase letters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .toLowerCase(); // Convert the entire string to lowercase
}

// Example usage:
console.log(stringToKebab("I love Kebab")); // Output: "i-love-kebab"

