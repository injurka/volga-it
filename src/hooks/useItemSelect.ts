import { useCallback, useState } from "react"

//& Item Select hook
////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const useItemSelect = <T>(initialArray?: T[]) => {
  const [itemSelected, setItemSelected] = useState<T[]>(initialArray || [])

  const handleSelected = useCallback(
    (param: T) => (e: unknown) => {
      itemSelected.find((x) => x === param)
        ? setItemSelected(itemSelected.filter((y) => y !== param))
        : setItemSelected([...itemSelected, param])
    },
    [itemSelected],
  )

  return { itemSelected, handleSelected }
}
