import { transliterate as transliterateLib } from 'transliteration'

/**
 * Transliterate non-latin characters to their closest latin equivalents
 * This ensures game compatibility while preserving original names in the database
 * 
 * Uses the 'transliteration' npm package for comprehensive Unicode to ASCII conversion
 * Supports 400+ languages and scripts including Chinese, Japanese, Korean, Arabic, Cyrillic, and more
 * 
 * @example
 * // Accented Latin characters
 * transliterate('José García') // => 'Jose Garcia'
 * transliterate('Françoise Müller') // => 'Francoise Muller'
 * 
 * // Cyrillic characters
 * transliterate('Александр') // => 'Aleksandr'
 * transliterate('Владимир') // => 'Vladimir'
 * 
 * // Greek characters
 * transliterate('Αλέξανδρος') // => 'Alexandros'
 * 
 * // Chinese characters
 * transliterate('李明') // => 'Li Ming'
 * 
 * // Mixed scripts
 * transliterate('José Владимир') // => 'Jose Vladimir'
 * 
 * // Special European characters
 * transliterate('Straße') // => 'Strasse'
 * transliterate('Bjørk Øresund') // => 'Bjork Oresund'
 * 
 * // Preserves safe characters
 * transliterate("O'Brien-Smith") // => "O'Brien-Smith"
 * 
 * // Company names
 * transliterate('Société Générale') // => 'Societe Generale'
 */
export function transliterate(text: string): string {
  if (!text || text.trim().length === 0) {
    return 'Player'
  }

  // Use the library to transliterate
  // The library handles virtually all Unicode characters
  let result = transliterateLib(text)
  
  // Clean up: keep only safe characters for game compatibility
  // Keep: letters (a-z, A-Z), numbers (0-9), spaces, hyphens, apostrophes, periods
  result = result.replace(/[^a-zA-Z0-9 \-'.]/g, '')
  
  // Clean up multiple spaces and trim
  result = result.replace(/\s+/g, ' ').trim()
  
  return result || 'Player' // Fallback if everything was removed
}

