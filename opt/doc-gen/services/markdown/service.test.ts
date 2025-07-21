import { colors } from 'jsr:@cliffy/ansi@1.0.0-rc.7/colors';
import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import { MarkdownService } from './service.ts';
import { Document } from './types.ts';

describe('MarkdownService', () => {
  const service = new MarkdownService({
    filePath: 'README.md',
  });

  describe('document', () => {
    it('should return the content of the file as a Document type', () => {
      // Arrange
      service.content = [
        '# Some Project',
        '',
        'Description of the project',
        '',
        '## Section A',
        '',
        'Section A content',
        '',
        '### Section A.1',
        '',
        'Section A.1 content',
        '',
        '### Section A.2',
        '',
        'Section A.2 content',
        '',
        '## Section B',
        '',
        'Section B content',
        '',
        '### Section B.1',
        '',
        'Section B.1 content',
        '',
        '#### Section B.1.a',
        '',
        'Section B.1.a content',
        '',
        '#### Section B.1.b',
        '',
        'Section B.1.b content',
        '',
        '#### Section B.1.c',
        '',
        'Section B.1.c content',
      ].join('\n');
      const expected: Document = {
        title: 'Some Project',
        content: 'Description of the project',
        sections: [
          {
            title: 'Section A',
            content: 'Section A content',
            sections: [
              {
                title: 'Section A.1',
                content: 'Section A.1 content',
              },
              {
                title: 'Section A.2',
                content: 'Section A.2 content',
              },
            ],
          },
          {
            title: 'Section B',
            content: 'Section B content',
            sections: [
              {
                title: 'Section B.1',
                content: 'Section B.1 content',
                sections: [
                  {
                    title: 'Section B.1.a',
                    content: 'Section B.1.a content',
                  },
                  {
                    title: 'Section B.1.b',
                    content: 'Section B.1.b content',
                  },
                  {
                    title: 'Section B.1.c',
                    content: 'Section B.1.c content',
                  },
                ],
              },
            ],
          },
        ],
      };

      // Act
      const structuredContent = service.document;

      // Assert
      assertEquals(
        structuredContent,
        expected,
        colors.bgRed(
          'returns the content of the file as a set of Record<string, any>',
        ),
      );
    });
  });

  describe('updateSection', () => {
    const newSection = [
      'this was painstakingly re-generated',
      'and we added another line',
      'here',
    ].join('\n');

    const newSectionWithComment = [
      '<!-- START generated-content - generated generated content please keep comment here to allow auto update -->',
      "<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN `docgen` TO UPDATE -->",
      newSection,
      '<!-- END generated-content - generated generated content please keep comment here to allow auto update -->',
    ].join('\n');

    const options = { marker: 'generated-content' };

    it('should replace the section between the START and END markers', () => {
      // Arrange
      service.content = [
        '# Some Project',
        '',
        'Does a bunch of things',
        '',
        '<!-- START generated-content -->',
        'this was painstakingly generated',
        'as was this',
        '<!-- END generated-content -->',
        '',
        '#The End',
        '',
        'Til next time',
      ].join('\n');

      const expected = [
        '# Some Project',
        '',
        'Does a bunch of things',
        '',
        newSectionWithComment,
        '',
        '#The End',
        '',
        'Til next time',
      ].join('\n');

      // Act
      service.updateSection(newSection, options);

      // Assert
      assertEquals(
        service.content,
        expected,
        colors.bgRed('replaces section in between START and END markers'),
      );
    });

    it('should replace the START marker with the new section when no END marker is found', () => {
      // Arrange
      service.content = [
        '# Some Project',
        '',
        'Does a bunch of things',
        '',
        '<!-- START generated-content -->',
        'this was painstakingly generated',
        'as was this',
        '',
        '#The End',
        '',
        'Til next time',
      ].join('\n');

      // Act
      const expected = [
        '# Some Project',
        '',
        'Does a bunch of things',
        '',
        newSectionWithComment,
        'this was painstakingly generated',
        'as was this',
        '',
        '#The End',
        '',
        'Til next time',
      ].join('\n');

      service.updateSection(newSection, options);

      assertEquals(
        service.content,
        expected,
        colors.bgRed('replaces START marker with new section'),
      );
    });

    it('should replace the END marker with the new section when no START marker are found', () => {
      // Arrange
      service.content = [
        '# Some Project',
        '',
        'Does a bunch of things',
        '',
        'this was painstakingly generated',
        'as was this',
        '',
        '<!-- END generated-content -->',
        '#The End',
        '',
        'Til next time',
      ].join('\n');

      const expected = [
        '# Some Project',
        '',
        'Does a bunch of things',
        '',
        'this was painstakingly generated',
        'as was this',
        '',
        newSectionWithComment,
        '#The End',
        '',
        'Til next time',
      ].join('\n');

      // Act
      service.updateSection(newSection, options);

      // Assert
      assertEquals(
        service.content,
        expected,
        colors.bgRed('replaces END marker with new section'),
      );
    });

    it('should append the document with the new section at the end when neither START nor END marker are found', () => {
      // Arrange
      service.content = [
        '# Some Project',
        '',
        'Does a bunch of things',
        '',
        '#The End',
        '',
        'Til next time',
      ].join('\n');

      const expected = [
        '# Some Project',
        '',
        'Does a bunch of things',
        '',
        '#The End',
        '',
        'Til next time',
        '',
        newSectionWithComment,
      ].join('\n');

      // Act
      service.updateSection(newSection, options);

      // Assert
      assertEquals(
        service.content,
        expected,
        colors.bgRed('appends new section at the end of the document'),
      );
    });

    it('should prepend the document with the new section when neither START nor END marker are found and forceTop is true', () => {
      // Arrange
      service.content = [
        '# Some Project',
        '',
        'Does a bunch of things',
        '',
        '#The End',
        '',
        'Til next time',
      ].join('\n');

      const expected = [
        newSectionWithComment,
        '',
        '# Some Project',
        '',
        'Does a bunch of things',
        '',
        '#The End',
        '',
        'Til next time',
      ].join('\n');

      // Act
      service.updateSection(newSection, {
        ...options,
        forceTop: true,
      });

      // Assert
      assertEquals(
        service.content,
        expected,
        colors.bgRed('prepends new section to the top of the document'),
      );
    });

    it('should return an empty string if the original string is empty', () => {
      // Arrange
      service.content = '';
      const expected = [
        '<!-- START generated-content - generated generated content please keep comment here to allow auto update -->',
        "<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN `docgen` TO UPDATE -->",
        '',
        '<!-- END generated-content - generated generated content please keep comment here to allow auto update -->',
      ].join('\n');

      // Act
      service.updateSection('', options);

      // Assert
      assertEquals(
        service.content,
        expected,
        colors.bgRed('returns new content only'),
      );
    });
  });
});
