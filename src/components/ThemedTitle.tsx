
interface Props {
    title: string;
    subTitle: string;
}

export const ThemedTitle = ({title, subTitle}: Props) => {
  return (
    <div className='mx-auto max-w-3xl text-center'>
        <h3 className='lg:text-5xl sm:text-4xl font-bold text-3xl tracking-tighter'>{title}</h3>
        <p className='text-gray-600 mt-4 text-xl md:text-lg'>{subTitle}</p>
    </div>
  )
}
