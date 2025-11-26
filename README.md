# utc-to-timezone

This npm package converts the given UTC date and time to the specified timezone. 

# 📌 Installation:
```
npm i utc-to-timezone

```
# 📥 Input:
The input can be,
  * String - '2025-11-26T12:00:00.000Z'
          or
  * new Date('2025-11-26T12:00:00.000Z')

# 🧩 Usage:
# Example 1:
```
const timezoneConvert = require('utc-to-timezone');
console.log(timezoneConvert.utcToTimeZone('2025-11-26T12:00:00.000Z', 'Asia/Kolkata', 'en-IN', true)); 
```

# 🧑‍💻 Output: 2025-11-26T17:30:00.000Z

# Example 2:
```
const { utcToTimeZone} = require('utc-to-timezone');
console.log(utcToTimeZone('2025-11-26T12:00:00.000Z', 'Asia/Kolkata', 'en-IN', true));
```

# 🧑‍💻 Output: 2025-11-26T17:30:00.000Z

# Example 3:
```
const { utcToTimeZone} = require('utc-to-timezone');
console.log(utcToTimeZone('2025-11-26T12:00:00.000Z', 'Asia/Kolkata', 'en-IN', false));
```

# 🧑‍💻 Output: 26/11/2025, 17:30:00 (This format is based on locale)


# 🛠 Parameters:

Param 1: UTC date either in string or Date format.
Param 2: Target timezone (default is 'Asia/Kolkata')
Param 3: Locale for formatting (default is 'en-CA')
Param 4: Boolean to determine if output should be in ISO format (default is false)



