import { AstNode, Writer } from "@fern-api/generator-commons";
import Swift, { AccessLevel, Func, Import } from "../swift";

export declare namespace Class {
    interface Args {
        accessLevel?: AccessLevel;
        name: string;
        functions?: Func[];
        inheritance?: Class[],
    }
}

export class Class extends AstNode {

    public readonly accessLevel?: AccessLevel;
    public readonly name: string;
    public readonly functions?: Func[];
    public readonly inheritance?: Class[];

    constructor({ 
        accessLevel, 
        name,
        functions,
        inheritance,
    }: Class.Args) {
        super(Swift.indentSize);
        this.accessLevel = accessLevel;
        this.name = name;
        this.functions = functions;
        this.inheritance = inheritance;
    }

    private buildTitle(): string | undefined {

        if (!this.inheritance) {
            return this.name;
        }

        const names = this.inheritance.map(obj => obj.name).join(", ");
        return `${this.name}: ${names}`;

    }

    public write(writer: Writer): void {

        // example: public class Name {
        writer.openBlock([this.accessLevel, "class", this.buildTitle()], "{", () => {

            writer.newLine();

            if (this.functions) {
                this.functions.forEach(func => {
                    writer.writeNode(func);
                    writer.newLine();
                });
            }

        }, "}");

    }

}
