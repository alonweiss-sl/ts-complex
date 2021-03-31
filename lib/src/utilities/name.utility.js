module.exports = (node, ctx) => {
    const { line, character } = ctx.getLineAndCharacterOfPosition(node.getStart(ctx));
    return `(${line + 1},${character + 1})`;
};
