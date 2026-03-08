interface PullQuoteProps {
  children: React.ReactNode
  attribution?: string
}

export default function PullQuote({ children, attribution }: PullQuoteProps) {
  return (
    <figure className="my-10 -mx-4 sm:mx-0">
      <blockquote className="border-l-4 border-navy-700 pl-6 py-2">
        <div className="text-xl font-serif font-semibold text-slate-800 leading-relaxed italic">
          {children}
        </div>
        {attribution && (
          <figcaption className="mt-3 text-sm text-slate-500 font-medium">
            — {attribution}
          </figcaption>
        )}
      </blockquote>
    </figure>
  )
}
