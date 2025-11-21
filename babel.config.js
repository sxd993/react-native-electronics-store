module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
          alias: {
            "@": "./src",
            "@app": "./src/app",
            "@entities": "./src/entities",
            "@features": "./src/features",
            "@pages": "./src/pages",
            "@shared": "./src/shared",
            "@widgets": "./src/widgets",
          },
        },
      ],
    ],
  };
};
