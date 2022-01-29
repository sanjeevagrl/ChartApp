export class helperfunction {
  public static groupbyData(array: any[], col: string, sumcol1: string) {
    const nooftransaction = 1;
    return Object.values(
      array.reduce(function (r, e) {
        var key = e[col];
        if (!r[key]) r[key] = { ...e, noofRecord: 1 };
        else {
          r[key][sumcol1] += e[sumcol1];
          r[key]["noofRecord"] = r[key]["noofRecord"] + 500;
        }
        return r;
      }, {})
    );
  }
}
