export function BlogPostLayout({ children, ...restProps }) {
  console.log(restProps); // Empty object, but should contain `title`
  return <article>{children}</article>;
}
