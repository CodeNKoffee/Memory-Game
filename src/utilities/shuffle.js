// Combine and shuffle two arrays
const shuffle = () => {
  const assets = [
    // { image: '/assets/brainfuck.png' },
    // { image: '/assets/cs.png' },
    { image: '/assets/css.png' },
    // { image: '/assets/firbase.png' },
    // { image: '/assets/flutter.png' },
    // { image: '/assets/git.png' },
    // { image: '/assets/go.png' },
    // { image: '/assets/graphql.png' },
    { image: '/assets/html.png' },
    // { image: '/assets/java.png' },
    { image: '/assets/javascript.png' },
    // { image: '/assets/kotlin.png' },
    { image: '/assets/nextjs.png' },
    { image: '/assets/node.png' },
    { image: '/assets/react.png' },
    { image: '/assets/redwoodjs.png' },
    // { image: '/assets/rust.png' },
    // { image: '/assets/solidity.png' },
    // { image: '/assets/swift.png' },
    // { image: '/assets/tailwind.png' },
    { image: '/assets/typescript.png' },
    // { image: '/assets/unity.png' },
    // { image: '/assets/vite.png' },
    // { image: '/assets/vscode.png' },
    // { image: '/assets/vue.png' },
  ];
  return [...assets, ...assets]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }));
};

export default shuffle;