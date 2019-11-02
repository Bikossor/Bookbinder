"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class Writer {
    static write(files) {
        files.forEach(file => {
            fs.writeFileSync(file.Name.replace(".book", ".md"), //TODO: Make this much prettier and sturdier
            file.Content);
        });
    }
}
exports.Writer = Writer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV3JpdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL1dyaXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHlCQUF5QjtBQUV6QixNQUFhLE1BQU07SUFDUixNQUFNLENBQUMsS0FBSyxDQUFDLEtBQWM7UUFDOUIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNqQixFQUFFLENBQUMsYUFBYSxDQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSw0Q0FBNEM7WUFDL0UsSUFBSSxDQUFDLE9BQU8sQ0FDZixDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0o7QUFURCx3QkFTQyJ9