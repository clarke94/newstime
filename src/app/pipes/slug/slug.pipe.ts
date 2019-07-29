import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'slug'
})
export class SlugPipe implements PipeTransform {

    transform(value: string): string {
        return value.toLowerCase()
            .replace(/\s+/g, '-')           // Replace spaces with -
            .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
            .replace(/\-\-+/g, '-')         // Replace multiple - with single -
            .replace(/^-+/, '')             // Trim - from start of text
            .replace(/-+$/, '');            // Trim - from end of text;
    }

}
