import { Menus } from '@/items/menus.js'
import { ref } from 'vue'

export const useMenu = () => {
  const menu = ref([])

  menu.value = Menus
  
  const groupByActor = (actor) => {
    return menu.value.reduce((acc, item) => {
      const actors = Array.isArray(item.actor) ? item.actor : [item.actor]

      if (actors.includes(actor)) {
        if (!acc[actor]) {
          acc[actor] = []
        }
        acc[actor].push(item)
      }
      return acc
    }, {})
  }
  return { menu, groupByActor }
}