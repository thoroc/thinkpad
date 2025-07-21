import { colors } from 'jsr:@cliffy/ansi@1.0.0-rc.7/colors';
import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import { findMarkers } from './markers.ts';

describe('findMarkers', () => {
  const options = { marker: 'generated-content' };

  it('should find the START and END markers', () => {
    // Arrange
    const lines = [
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
    ];
    const expected = {
      startIndex: 4,
      endIndex: 7,
    };
    // Act
    const { startIndex, endIndex } = findMarkers(lines, options);
    // Assert
    assertEquals(
      startIndex,
      expected.startIndex,
      colors.bgRed(`finds START and END markers: [startIndex=${startIndex}]`),
    );
    assertEquals(
      endIndex,
      expected.endIndex,
      colors.bgRed(`finds START and END markers: [endIndex=${endIndex}]`),
    );
  });

  it('should find the START marker only', () => {
    // Arrange
    const lines = [
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
    ];
    const expected = {
      startIndex: 4,
      endIndex: undefined,
    };
    // Act
    const { startIndex, endIndex } = findMarkers(
      lines,
      options,
    );
    // Assert
    assertEquals(
      startIndex,
      expected.startIndex,
      colors.bgRed(`finds START marker only: [startIndex=${startIndex}]`),
    );
    assertEquals(
      endIndex,
      expected.endIndex,
      colors.bgRed(`finds START marker only: [endIndex=${endIndex}]`),
    );
  });

  it('should find the END marker only', () => {
    // Arrange
    const lines = [
      '# Some Project',
      '',
      'Does a bunch of things',
      '',
      'this was painstakingly generated',
      'as was this',
      '<!-- END generated-content -->',
      '',
      '#The End',
      '',
      'Til next time',
    ];
    const expected = {
      startIndex: undefined,
      endIndex: 6,
    };
    // Act
    const { startIndex, endIndex } = findMarkers(
      lines,
      options,
    );
    // Assert
    assertEquals(
      startIndex,
      expected.startIndex,
      colors.bgRed(`finds end marker only: [startIndex=${startIndex}]`),
    );
    assertEquals(
      endIndex,
      expected.endIndex,
      colors.bgRed(`finds end marker only: [endIndex=${endIndex}]`),
    );
  });

  it('should not find any markers', () => {
    // Arrange
    const lines = [
      '# Some Project',
      '',
      'Does a bunch of things',
      '',
      'this was painstakingly generated',
      'as was this',
      '',
      '#The End',
      '',
      'Til next time',
    ];
    const expected = {
      startIndex: undefined,
      endIndex: undefined,
    };
    // Act
    const { startIndex, endIndex } = findMarkers(
      lines,
      options,
    );
    // Assert
    assertEquals(
      startIndex,
      expected.startIndex,
      colors.bgRed(`does not find any markers: [startIndex=${startIndex}]`),
    );
    assertEquals(
      endIndex,
      expected.endIndex,
      colors.bgRed(`does not find any markers: [endIndex=${endIndex}]`),
    );
  });
});
