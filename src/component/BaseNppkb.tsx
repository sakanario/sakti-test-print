import React, { ForwardedRef, forwardRef } from "react";
import "./BaseNppkb.scss";

const BaseNppkb = forwardRef<HTMLDivElement>(
  (props, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div ref={ref} className={"dokumen__nppkb body--xsmall"}>
        {/* First Section */}
        <table className="text-uppercase w-100">
          <tbody>
            <tr>
              <td className="text-center">BADAN PENDAPATAN DAERAH</td>
            </tr>
            <tr>
              <td className="text-center">PPPD NO HATTA NO. 528 BANDUNG </td>
            </tr>
            <tr>
              <td className="text-center">
                NOTA PERHITUNGAN PAJAK KENDARAAN BERMOTOR (NPPKB){" "}
              </td>
            </tr>
            <tr>
              <td className="text-center">
                <hr
                  className="mb-1 mt-1"
                  style={{ border: "none", borderTop: "1.5px dashed #1a4373" }}
                />
              </td>
            </tr>
          </tbody>
        </table>

        {/* Second Section */}
        <table className="text-uppercase">
          <tbody>
            <tr>
              <td>Ket</td>
              <td className="titik-dua">:</td>
              <td>DUMMY_KODE - DUMMY_LAYANAN</td>
            </tr>
            <tr>
              <td>Milik Ke</td>
              <td className="titik-dua">:</td>
              <td>DUMMY_MILIK : DUMMY_TARIF</td>
            </tr>
            <tr>
              <td>NO.POLISI</td>
              <td className="titik-dua">:</td>
              <td>AB 123 CD [DUMMY_PLAT] - DUMMY_WILAYAH</td>
            </tr>
            <tr>
              <td>NAMA</td>
              <td className="titik-dua">:</td>
              <td>DUMMY_NAME [123456789]</td>
            </tr>
            <tr>
              <td>ALAMAT</td>
              <td className="titik-dua">:</td>
              <td>DUMMY_ADDRESS</td>
            </tr>
            <tr>
              <td>KELURAHAN</td>
              <td className="titik-dua">:</td>
              <td>DUMMY_KELURAHAN</td>
            </tr>
            <tr>
              <td>KECAMATAN</td>
              <td className="titik-dua">:</td>
              <td>DUMMY_KECAMATAN</td>
            </tr>
            <tr>
              <td>MS. PAJAK</td>
              <td className="titik-dua">:</td>
              <td>12-1-2012 - 12-1-2012</td>
            </tr>
            <tr>
              <td>TGL AKHIR PAJAK LAMA</td>
              <td className="titik-dua">:</td>
              <td>12-1-2012</td>
            </tr>
            <tr>
              <td>TGL AKHIR STNK</td>
              <td className="titik-dua">:</td>
              <td>12-1-2012</td>
            </tr>
            <tr>
              <td>MRK/TYPE</td>
              <td className="titik-dua">:</td>
              <td>DUMMY_MEREK / DUMMY_MODEL / [BBM]</td>
            </tr>
            <tr>
              <td>JNS/KD_MRK</td>
              <td className="titik-dua">:</td>
              <td>DUMMY_JENIS / [123] / 2021</td>
            </tr>
            <tr>
              <td>RANGKA/MSN</td>
              <td className="titik-dua">:</td>
              <td>[R123] / [M123]</td>
            </tr>
            <tr>
              <td>CC/WRN/KFS</td>
              <td className="titik-dua">:</td>
              <td>[150 CC] / [RED] / (FUNCTION)</td>
            </tr>
            <tr>
              <td>NJKB/BBT</td>
              <td className="titik-dua">:</td>
              <td>Rp. 10,000,000 / 1200</td>
            </tr>
            <tr>
              <td>KETERANGAN 1</td>
              <td className="titik-dua">:</td>
              <td>DUMMY_KET1</td>
            </tr>
            <tr>
              <td>KETERANGAN 2</td>
              <td className="titik-dua">:</td>
              <td>DUMMY_KET2</td>
            </tr>
            <tr>
              <td>KETERANGAN 3</td>
              <td className="titik-dua">:</td>
              <td>DUMMY_KET3</td>
            </tr>
            <tr>
              <td>KODE VOUCHER</td>
              <td className="titik-dua">:</td>
              <td>VOUCHER_123</td>
            </tr>
          </tbody>
        </table>

        {/* Third Section */}
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td colSpan={2}>DGN RINCIAN SBB :</td>
              <td className="text-center">Pokok</td>
              <td className="px-3"></td>
              <td className="text-center">Denda</td>
              <td className="px-3"></td>
              <td className="text-center">Opsen</td>
            </tr>
            <tr>
              <td>BBNKB I</td>
              <td className="text-center">: Rp. </td>
              <td className="text-right ">1,000,000</td>
              <td className="text-center"> Rp. </td>
              <td className="text-right ">50,000</td>
              <td className="text-center"> Rp. </td>
              <td className="text-right ">10,000</td>
            </tr>
            <tr>
              <td>BBNKB II</td>
              <td className="text-center">: Rp. </td>
              <td className="text-right ">2,000,000</td>
              <td className="text-center"> Rp. </td>
              <td className="text-right ">100,000</td>
              <td className="text-center"> Rp. </td>
              <td className="text-right ">20,000</td>
            </tr>
            <tr>
              <td>PKB Pokok</td>
              <td className="text-center">: Rp. </td>
              <td className="text-right ">3,000,000</td>
              <td className="text-center"> Rp. </td>
              <td className="text-right ">150,000</td>
              <td className="text-center"> Rp. </td>
              <td className="text-right ">30,000</td>
            </tr>
            <tr>
              <td>PKB Tunggakan 1</td>
              <td className="text-center">: Rp. </td>
              <td className="text-right ">500,000</td>
              <td className="text-center"> Rp. </td>
              <td className="text-right ">25,000</td>
              <td className="text-center"> Rp. </td>
              <td className="text-right ">5,000</td>
            </tr>
            <tr>
              <td>PKB Tunggakan 2</td>
              <td className="text-center">: Rp. </td>
              <td className="text-right ">600,000</td>
              <td className="text-center"> Rp. </td>
              <td className="text-right ">30,000</td>
              <td className="text-center"> Rp. </td>
              <td className="text-right ">6,000</td>
            </tr>
            <tr>
              <td>PKB Tunggakan 3</td>
              <td className="text-center">: Rp. </td>
              <td className="text-right ">700,000</td>
              <td className="text-center"> Rp. </td>
              <td className="text-right ">35,000</td>
              <td className="text-center"> Rp. </td>
              <td className="text-right ">7,000</td>
            </tr>
            <tr>
              <td>PKB Tunggakan 4</td>
              <td className="text-center">: Rp. </td>
              <td className="text-right ">800,000</td>
              <td className="text-center"> Rp. </td>
              <td className="text-right ">40,000</td>
              <td className="text-center"> Rp. </td>
              <td className="text-right ">8,000</td>
            </tr>
            <tr>
              <td>PKB Tunggakan 5</td>
              <td className="text-center">: Rp. </td>
              <td className="text-right ">900,000</td>
              <td className="text-center"> Rp. </td>
              <td className="text-right ">45,000</td>
              <td className="text-center"> Rp. </td>
              <td className="text-right ">9,000</td>
            </tr>
            <tr>
              <td>SWDKLLJ</td>
              <td className="text-center">: Rp. </td>
              <td className="text-right ">100,000</td>
              <td className="text-center"> Rp. </td>
              <td className="text-right ">5,000</td>
              <td className="text-center"> Rp. </td>
              <td className="text-right ">1,000</td>
            </tr>
            <tr>
              <td>SWDKLLJ Tunggakan</td>
              <td className="text-center">: Rp. </td>
              <td className="text-right ">50,000</td>
              <td className="text-center"> Rp. </td>
              <td className="text-right ">2,500</td>
              <td className="text-center"> Rp. </td>
              <td className="text-right ">500</td>
            </tr>
            <tr>
              <td>BEA ADM STNK</td>
              <td className="text-center">: Rp. </td>
              <td className="text-right ">75,000</td>
            </tr>
            <tr>
              <td>BEA ADM TNKB</td>
              <td className="text-center">: Rp. </td>
              <td className="text-right ">80,000</td>
            </tr>
            <tr>
              <td colSpan={7} className="text-center">
                <hr
                  className="mb-1 mt-1"
                  style={{ border: "none", borderTop: "1.5px dashed #1a4373" }}
                />
              </td>
            </tr>
            <tr>
              <td>JUMLAH</td>
              <td className="text-center">: Rp. </td>
              <td className="text-right ">10,000,000</td>
              <td className="text-center"> Rp. </td>
              <td className="text-right ">500,000</td>
              <td className="text-center"> Rp. </td>
              <td className="text-right ">100,000</td>
            </tr>
            <tr>
              <td className="font-weight-bold fs-14">TOTAL</td>
              <td className="text-center font-weight-bold fs-14">: Rp. </td>
              <td className="text-right font-weight-bold fs-14">10,500,000</td>
            </tr>
            <tr>
              <td colSpan={7} className="text-center">
                <hr
                  className="mt-1 mb-1"
                  style={{ border: "none", borderTop: "1.5px dashed #1a4373" }}
                />
              </td>
            </tr>
          </tbody>
        </table>

        {/* Fourth Section */}
        <table>
          <tbody>
            <tr>
              <td className="body--xsmall">DITETAPKAN DI</td>
              <td className="body--xsmall">:</td>
              <td colSpan={2} className="body--xsmall">
                DUMMY_PLACE, DATE
              </td>
            </tr>
            <tr>
              <td className="body--xsmall">PETUGAS PENETAPAN</td>
              <td className="body--xsmall">:</td>
              <td colSpan={2} className="body--xsmall">
                DUMMY_OFFICER
              </td>
            </tr>
            <tr>
              <td>.</td>
              <td>.</td>
              <td>.</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
);
export default BaseNppkb;
