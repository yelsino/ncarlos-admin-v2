import { TipoVenta } from "types-yola";

export const convertirTipoVenta = (tipoVenta: TipoVenta): string => {
	switch (tipoVenta) {
		case "KILOGRAMOS":
			return 'kg'
	
		case "FRACCIONES":
			return 'und'
		
		case "UNIDADES":
			return 'und'

		case "LITROS":
			return 'lt'
		
		default:
			return "";
	}
}