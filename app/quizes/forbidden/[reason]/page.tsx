type Props = {
  params: {
    reason: string
  }
}

const Page = async ({ params: { reason} }: Props) => {
  switch (reason) {
    case "unauthorized":
      return (
        <>Вы не можете зайти на эту страницу, так как вы не авторизованы</>
      )
    case "not-found":
      return <>Страница не найдена</>
    default:
      return <>Что-то пошло не так</>
  }
}

export default Page