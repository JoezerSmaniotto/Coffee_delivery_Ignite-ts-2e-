/* ESTE ARQUIVO SÓ TEM CÓDIGO DE TIPOS  */

import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme
/* Assim guardo  em ThemeType as propriedade que existem dento do defaultTheme, pois sem isso quando 
tento pegar ao do theme ele não me autosugestiona */

declare module 'styled-components' {
  /* Criando uma tipagem par ao modulo styled-components,
     pegando o q já tem e adicionando algo novo deste caso o ThemeType */
  export interface DefaultTheme extends ThemeType {}
}
