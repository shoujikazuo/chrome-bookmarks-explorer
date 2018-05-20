export interface TextExtractor {
    extract(): string //TODO 超絶長い文字列が来るかもしれないのでバッファにしたい
}