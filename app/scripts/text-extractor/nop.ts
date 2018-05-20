import { TextExtractor } from './extractor';
export class NopTextExtractor implements TextExtractor {
    extract(): string {
        return "";
    }
}