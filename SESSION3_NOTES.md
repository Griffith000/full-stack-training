# Session 3 Notes: Next.js Full-Stack Development

## 1. CSR vs SSR

### Restaurant Analogy

#### Client-Side Rendering (CSR - Traditional React)
You walk into an empty restaurant. The waiter gives you a menu (empty HTML). You order (loads JavaScript). The kitchen cooks (fetches data). You wait. Finally, food arrives (page shows). This takes time!

#### Server-Side Rendering (SSR - Next.js)
You call ahead. Kitchen starts cooking while you're on your way. You arrive, food is on the table. You eat immediately!

---

## 2. What are Layouts?

**Layouts = Wrapper components that apply to multiple pages**

- Like a template that surrounds your page content
- Root Layout (`app/layout.tsx`) → Applies to ENTIRE app
- Nested Layouts → Apply to specific sections only

### File Structure = Route Structure

```
app/
├── layout.tsx          → Applies to EVERYTHING
├── page.tsx            → Homepage (/)
├── about/
│   └── page.tsx        → /about
└── shop/
    ├── layout.tsx      → Only applies to /shop/*
    └── page.tsx        → /shop
```

### Benefits

- ✅ No code duplication (DRY principle)
- ✅ Consistent UI across pages
- ✅ Easy to update global elements

---

## 3. React Router vs Next.js File-Based Routing

### Old React (React Router)

```jsx
// Need to install: npm install react-router-dom
// Need to configure routes manually

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/products" element={<Products />} />
  </Routes>
</BrowserRouter>
```

### Next.js File-Based Routing (New!)

Just create files in `app/` folder:

```
app/page.tsx          → Automatic: /
app/about/page.tsx    → Automatic: /about  
app/products/page.tsx → Automatic: /products
```

---

## 4. SHADCN/UI

### What is it?

- Collection of reusable UI components
- Built with Tailwind CSS + Radix UI
- Copy-paste components into your project
- NOT a component library (you own the code)

📚 **Documentation**: [https://ui.shadcn.com/docs/installation](https://ui.shadcn.com/docs/installation)

### Why Use shadcn?

1. **Accessible** - Works with screen readers
2. **Customizable** - You own the code, can modify
3. **Consistent** - Same design system
4. **Fast development** - Don't build from scratch

---

## 5. TanStack Query (formerly React Query)

📚 **Documentation**: [https://tanstack.com/query/v5/docs/framework/react/installation](https://tanstack.com/query/v5/docs/framework/react/installation)

### Why It's Awesome

1. **Automatic Caching** - No duplicate requests
2. **Background Updates** - Fresh data automatically
3. **Error Retries** - Tries again if fails
4. **Loading States** - Built-in `isLoading`, `isFetching`

### Key Concepts

#### Query Key

Unique identifier for your query - Used for caching and invalidation

```javascript
['products']                 // All products
['products', 'electronics']  // Electronics only
['products', 123]           // Product ID 123
```

#### Query Function

```javascript
async function fetchProducts() {
  const res = await fetch('/api/products');
  return res.json(); // MUST return data
}
```

#### Query States

- `isLoading` - First time loading (no data yet)
- `isFetching` - Any fetch in progress
- `isError` - Query failed
- `error` - Error details
- `data` - Your actual data
- `refetch()` - Function to reload data

> **TanStack Query is your smart data assistant. You tell it what to fetch, it handles everything else!**

---

## 6. Providers

### The Problem

- TanStack Query needs to be available to ALL components
- Without Providers, `useQuery` won't work
- Error: "No QueryClient set, use QueryClientProvider"

### Solution

Wrap your application with the necessary providers to make TanStack Query available throughout your component tree.

---

## 7. Custom Hooks

### What are Custom Hooks?

- Functions that use React hooks inside
- Reuse logic across components
- Must start with `use` (React convention)

### Why Create Custom Hooks?

1. **Reusability** - Use same logic in multiple places
2. **Organization** - Keep logic separate from UI
3. **Testing** - Test logic independently
4. **Clean Components** - Components focus on UI only

---

## Summary

These concepts form the foundation of modern Next.js development:
- **SSR** provides better performance and SEO
- **Layouts** enable consistent UI structure
- **File-based routing** simplifies navigation
- **shadcn/ui** speeds up UI development
- **TanStack Query** manages data fetching intelligently
- **Custom hooks** promote code reusability

