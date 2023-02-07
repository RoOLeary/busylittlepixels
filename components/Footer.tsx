import { Bounded } from "./Bounded";
import { CTA } from "./CallToAction";

const SignUpForm = () => {
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

export const Footer = () => {
  return (
    <Bounded as="footer" className="bg-black pb-12 text-slate-300 md:pb-12 footer">
      <div className="grid grid-cols-1 justify-items-center gap-10 md:gap-10">
      <div className="px-4">
      <form
        action="/api/sign-up"
        method="post"
        className="grid w-full max-w-xl grid-cols-1 gap-6"
      >
        <div className="text-center tracking-tight text-slate-300">
          <h3 className="text-center font-black tracking-tighter text-3xl md:text-6xl mb-4 text-white last:mb-0 uppercase">Sign up for our busy<span style={{ "color": "red"}}>little</span>updates</h3>
          <p className="mb-4 last:mb-0">We promise we won't spam you, or do anything nefarious with your data. <br />It's just not how we roll. </p>
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
            <p className="text-center text-xs text-slate-400">By subscribing to our newsletter you accept to receive occasional, recurring emails about our products and company</p>
          </div>
        </form>
        <div className="mx-auto flex mt-8 justify-center">
            <>
            <a className="text-white">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
            </a>
            <a className="ml-4 text-white">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
            </a>
            </>
        </div>
      </div>

        <div className="mx-auto w-full max-w-3xl text-center text-xs font-semibold tracking-tight">
          © 2023 busy<span className="rd_txt">little</span>pixels. Made with <span className="rd_txt">&hearts;</span> in Amsterdam.
        </div>
      </div>
    </Bounded>
  );
};
