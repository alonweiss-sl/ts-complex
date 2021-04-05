module.exports = (node, ctx) => {
    const pos = Math.max((node.name && node.name.pos) || 0, node.getStart(ctx));
    const { line, character } = ctx.getLineAndCharacterOfPosition(pos);
    return `(${line + 1},${character + 1})`;
};
