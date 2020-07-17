import encode from "../../src/util/encode";

describe("Encode algorithm", () => {
  it(" correctly encodes a string", () => {
    expect(encode("abc (( (ab)")).toBe("abc (( (ab)");
    expect(encode("is")).toBe("is");
    expect(encode("ab ab abc.def!")).toBe("ab ab abc.def!");
    expect(encode("big (biiiiig) !!!")).toBe("big (biiiiig) !!!");

    const expected = [
      "big (biiiiig) (wodrs)!!",
      "big (biiiiig) (wdors)!!",
      "big (biiiiig) (wdros)!!",
      "big (biiiiig) (wrods)!!",
      "big (biiiiig) (wrdos)!!"
    ];

    expect(expected).toContain(encode("big (biiiiig) (words)!!"));

    const encoded = encode("big (bii((ii(dabcdefr)ii))ig) !!!");
    expect(encoded[13]).toEqual("d");
    expect(encoded[20]).toEqual("r");
  });
});
