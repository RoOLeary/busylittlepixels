import { Bounded } from "./Bounded";

const NewsletterSignUp = () => {
  return (
    <div className="px-4">
      <form
        action="/api/sign-up"
        method="post"
        className="grid w-full max-w-xl grid-cols-1 gap-6"
      >
        <div className="text-center tracking-tight text-slate-300">
        <h2 className="font-semibold tracking-tighter text-4xl md:text-6xl mb-4 text-white last:mb-0">Sign up for our newsletter</h2>
        <p className="mb-4 last:mb-0">Something something snappy marketing copy yada yada yada blort blort blah</p>
        </div>
    
        <div className="grid grid-cols-1 gap-2">
          <div className="relative">
            <label>
              <span className="sr-only">Email address</span>
              <input
                name="email"
                type="email"
                placeholder="jane.doe@example.com"
                required={true}
                className="w-full rounded border border-slate-500 bg-slate-600 py-3 pl-3 pr-10 text-white placeholder-slate-400"
              />
            </label>
            <button
              type="submit"
              className="absolute top-0 right-0 bottom-0 flex items-center justify-center px-3 text-2xl text-slate-400"
            >
              <span className="sr-only">Submit</span>
              <span aria-hidden={true}>&rarr;</span>
            </button>
          </div>
          <p className="text-center text-xs text-slate-400">By subscribing to our newsletter you accept to receive recurring emails about our product and our company</p>
        </div>
      </form>
    </div>
  );
};

export const CTABlock = () => {
  return (
    <Bounded as="section" className="bg-black pb-12 text-slate-300 md:pb-12">
      <div className="grid grid-cols-1 justify-items-center gap-20 md:gap-24">
        <NewsletterSignUp />
      </div>
    </Bounded>
  );
};
