export function BlogPostGoogleBadge() {
  return (
    <section className="w-full bg-[#FAF7F2] pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1117px] mx-auto bg-white rounded-[24px] sm:rounded-[28px] shadow-sm overflow-hidden flex flex-col sm:flex-row items-stretch border border-black/[0.06]">
        {/* Left Vertical Accent Bar */}
        <div className="w-full sm:w-[18px] h-2 sm:h-auto shrink-0 bg-[#164E3D] rounded-t-[24px] sm:rounded-t-none sm:rounded-l-[28px]" />

        {/* Inner Content */}
        <div className="flex-1 px-5 py-4 sm:px-7 sm:py-5 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Google Icon & Text */}
          <div className="flex items-center gap-4 sm:gap-5 text-center sm:text-left flex-1 min-w-0">
            <div className="size-10 sm:size-11 shrink-0 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-sans font-semibold text-[15px] sm:text-[17px] text-[#1A5944] leading-tight">
                See our medical cannabis guides highlighted in Google Search
              </h4>
              <p className="font-sans font-normal text-[13px] sm:text-[14px] text-[#5F6B6F] leading-normal mt-1">
                Add Medical Marijuana Doctor Oklahoma as a trusted source for verified clinical information.
              </p>
            </div>
          </div>

          {/* Right Button */}
          <div className="shrink-0">
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-3.5 pl-6 pr-1.5 py-1.5 rounded-full text-white font-sans font-semibold text-sm sm:text-[15px] bg-[#164E3D] hover:bg-[#0E3B2E] transition-all shadow-sm group"
            >
              <span>Add a Source</span>
              <span className="size-8 sm:size-9 rounded-full bg-white flex items-center justify-center p-1.5 shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                <svg className="w-full h-full" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
