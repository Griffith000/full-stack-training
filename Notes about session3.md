__Notes about session3__

__1 /CSR vs SSR __

__Restaurant analogy :__

__Client\-Side Rendering \(CSR \- Traditional React\):__

You walk into an empty restaurant\. The waiter gives you a menu \(empty HTML\)\. You order \(loads JavaScript\)\. The kitchen cooks \(fetches data\)\. You wait\. Finally, food arrives \(page shows\)\. This takes time\!

__Server\-Side Rendering \(SSR \- Next\.js\):__

You call ahead\. Kitchen starts cooking while you're on your way\. You arrive, food is on the table\. You eat immediately\!

![SSR vs CSR : r/nextjs]()

![Next.js Client-Side and Server-Side Components: When and What to Use | by  Abdullah @ Writes | Level Up Coding]()

__2/What are Layouts?__

- Layouts = Wrapper components that apply to multiple pages
- Like a template that surrounds your page content
- __Root Layout__ \(app/layout\.tsx\) → Applies to ENTIRE app
- __Nested Layouts__ → Apply to specific sections only

File structure = Route structure

app/

├── layout\.tsx          → Applies to EVERYTHING

├── page\.tsx            → Homepage \(/\)

├── about/

│   └── page\.tsx        → /about

└── shop/

    ├── layout\.tsx      → Only applies to /shop/\*

    └── page\.tsx        → /shop

Code example :

__Benefits:__

- ✅ No code duplication \(DRY principle\)
- ✅ Consistent UI across pages
- ✅ Easy to update global elements

__3/React router vs next js file\_based routing :__

__Old react :__

__Next\.js File\-Based Routing \(New\!\):__

// Need to install: npm install react\-router\-dom

// Need to configure routes manually

<BrowserRouter>

  <Routes>

    <Route path="/" element=\{<Home />\} />

    <Route path="/about" element=\{<About />\} />

    <Route path="/products" element=\{<Products />\} />

  </Routes>

</BrowserRouter>

Just create files in app/ folder:

app/page\.tsx          → Automatic: /

app/about/page\.tsx    → Automatic: /about  

app/products/page\.tsx → Automatic: /products

__4/SHADCN/UI :__

__What is it?__

- __Collection of reusable UI components__
- __Built with Tailwind CSS \+ Radix UI__
- __Copy\-paste components into your project__
- __NOT a component library \(you own the code\)__

[__https://ui\.shadcn\.com/docs/installation__](https://ui.shadcn.com/docs/installation)

__Why Use shadcn?__

1. __Accessible__ \- Works with screen readers
2. __Customizable__ \- You own the code, can modify
3. __Consistent__ \- Same design system
4. __Fast development__ \- Don't build from scratch

__5/TANSTACK QUERY \(formerly React Query\)__

[__https://tanstack\.com/query/v5/docs/framework/react/installation__](https://tanstack.com/query/v5/docs/framework/react/installation)

__Why It's Awesome:__

1. __Automatic Caching__ \- No duplicate requests
2. __Background Updates__ \- Fresh data automatically
3. __Error Retries__ \- Tries again if fails
4. __Loading States__ \- Built\-in isLoading, isFetching

__Key Concepts:__

__Query Key:__

\['products'\]                 // All products

\['products', 'electronics'\]  // Electronics only

\['products', 123\]           // Product ID 123

- Unique identifier for your query
- Used for caching and invalidation

__Query Function:__

javascript

async function fetchProducts\(\) \{

  const res = await fetch\('/api/products'\);

  return res\.json\(\); // MUST return data

\}

__Query States:__

- isLoading \- First time loading \(no data yet\)
- isFetching \- Any fetch in progress
- isError \- Query failed
- error \- Error details
- data \- Your actual data
- refetch\(\) \- Function to reload data

__TanStack Query is your smart data assistant\. You tell it what to fetch, it handles everything else\!"__

__Providers :__

The Problem:

- TanStack Query needs to be available to ALL components
- Without Providers, useQuery won't work
- Error: "No QueryClient set, use QueryClientProvider"

__6/custom hooks :__

__What are Custom Hooks?__

- Functions that use React hooks inside
- Reuse logic across components
- Must start with use \(React convention\)

__Why Create Custom Hooks?__

1. __Reusability__ \- Use same logic in multiple places
2. __Organization__ \- Keep logic separate from UI
3. __Testing__ \- Test logic independently
4. __Clean Components__ \- Components focus on UI only

