import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'slug'
})
export class SlugPipe implements PipeTransform {

    transform(value: string): string {
        return value.toLowerCase()
            .replace(/\s+/g, '+')       // Replace spaces with +
            .replace(/[^\w\+]+/g, '')   // Remove all non-word chars except +
            .replace(/\+\++/g, '+')     // Replace multiple + with single +
            .replace(/^\s+/, '')        // Trim whitespace from start of text
            .replace(/\s+$/, '')        // Trim whitespace from end of text
            .replace(/^\+/g, '')        // Trim + from start of text
            .replace(/\+$/g, '');       // Trim + from end of text
    }

}
