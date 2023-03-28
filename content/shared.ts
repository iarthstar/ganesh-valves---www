export enum Routes {
  Root = "/",
  Products = "/product",
  Company = "/company",
  Resources = "/resources",
  Social = "/social",
}

export const NAV_LINKS = [
  { label: "Products", href: Routes.Products },
  { label: "Company", href: Routes.Company },
  { label: "Resources", href: Routes.Resources },
];

export const FOOTER_LINKS: Record<Routes, any> = {
  [Routes.Root]: [],
  [Routes.Products]: [
    { label: "Valve 1", href: "/" },
    { label: "Valve 2", href: "/" },
    { label: "Valve 3", href: "/" },
    { label: "Valve 4", href: "/" },
  ],
  [Routes.Company]: [
    { label: "About", href: "/" },
    { label: "Careers", href: "/" },
    { label: "Blog", href: "/" },
  ],
  [Routes.Resources]: [
    { label: "Contact", href: "/" },
    { label: "Privacy Policy", href: "/" },
    { label: "Terms of Service", href: "/" },
  ],
  [Routes.Social]: [
    { label: "Twitter", href: "/" },
    { label: "Instagram", href: "/" },
    { label: "Youtube", href: "/" },
  ],
};

export const STATS = [
  { value: "40", title: "Years experience" },
  { value: "1,786", title: "Projects completed" },
  { value: "50+", title: "Employees" },
];

export const SPECIALITIES = [
  {
    title: "Design",
    desc: "We collaborate for conceptualizing, designing, iterating, finally developing and materializing the product.",
  },
  {
    title: "Repair",
    desc: "We collaborate for conceptualizing, designing, iterating, finally developing and materializing the product.",
  },
  {
    title: "Contract",
    desc: "We collaborate for conceptualizing, designing, iterating, finally developing and materializing the product.",
  },
  {
    title: "Install",
    desc: "We collaborate for conceptualizing, designing, iterating, finally developing and materializing the product.",
  },
];
