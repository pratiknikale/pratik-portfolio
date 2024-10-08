export default function Button({
    children,
    customClass = ""
}) {

    return (
        <button class={`${customClass} group relative inline-flex h-12 items-center justify-center border-solid border-2 border-[#F16C20] overflow-hidden rounded-md bg-[#F16C20] hover:bg-[#EDEDED] active:scale-95 hover:text-[#F16C20] rounded-[10px] text-neutral-200 transition hover:scale-110`}>
            <span>{children}</span>
            <div class={`absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-700 group-hover:[transform:skew(-12deg)_translateX(100%)]`}>
                <div class={`relative h-full w-8 bg-white/100`}></div>
            </div>
        </button>
    )
}
