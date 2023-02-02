
import { useMemo, useRef, useState } from 'react'
import { createAutocomplete } from '@algolia/autocomplete-core'
import { Link } from 'react-router-dom'

const Search = (props) => {
  const [autocompleteState, setAutocompleteState] = useState({
    collections: [],
    isOpen: false
  })

  const autocomplete = useMemo(
    () =>
      createAutocomplete({
        placeholder: 'Busca tu oferta',
        onStateChange: ({ state }) => setAutocompleteState(state),
        getSources: () => [
          {
            sourceId: 'offers-next-api',
            getItems: ({ query }) => {
              if (query) {
                return fetch(`/api/search?q=${query}`).then((res) => res.json())
              }
            }
          }
        ],
        ...props
      }),
    [props]
  )

  const formRef = useRef(null) as any
  const inputRef = useRef(null) as any
  const panelRef = useRef(null) as any

  const formProps = autocomplete.getFormProps({
    inputElement: inputRef.current
  })

  const inputProps = autocomplete.getInputProps({
    inputElement: inputRef.current
  })

  return (
    <form ref={formRef} className="mb-20 flex justify-center" {...formProps}>
      <div className="relative flex w-2/6  rounded-full bg-gradient-to-tr from-purple-600 to-blue-300 p-1">
        <input
          ref={inputRef}
          className="w-full flex-1 rounded-full p-2 pl-4"
          {...inputProps}
        />
        {autocompleteState.isOpen && (
          <div
            className="absolute top-0 left-0 z-10 mt-16 overflow-hidden rounded-lg border border-gray-100 bg-white shadow-lg"
            ref={panelRef}
            {...autocomplete.getPanelProps()}
          >
            {autocompleteState.collections.map((collection, index) => {
              const { items } = collection
              console.log({ items })
              return (
                <section key={`section-${index}`}>
                  {items.length > 0 && (
                    <ul {...autocomplete.getListProps()}>
                      {items.map((item) => (
                        <AutocompleteItem key={item.id} {...item} />
                      ))}
                    </ul>
                  )}
                </section>
              )
            })}
          </div>
        )}
      </div>
    </form>
  )
}

export default Search

const AutocompleteItem = ({ id, title, img, price }: any) => {
  return (
    <li>
      <Link to={`/detail/${id}`}>
        <a className="flex gap-4 p-4 hover:bg-blue-300">
          <img src={img} alt={title} className="h-12 w-12 object-contain" />
          <div>
            <h3 className="text-sm font-semibold">{title}</h3>
            <p className="text-xs text-gray-600">{price}</p>
          </div>
        </a>
      </Link>
    </li>
  )
}
