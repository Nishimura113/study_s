"use client";

import { useState } from "react";

export default function Home() {
  const [gameCount, setGameCount] = useState<number>(0);
  const [ev, setEv] = useState<number | null>(null);
  const [state, setState] = useState<string>("normal");
  const [exchangeRate, setExchangeRate] = useState<string>("equal");
  const evTables: Record<string, Record<string, { game: number; ev: number }[]>> = {

    normal: { // 前回駆け抜け以外_前回獲得：100～900枚 (スクリーンショット「期待値(枚)」を反映)
      'equal': [
        { game: 0, ev: -1026 },
        { game: 50, ev: 182 },
        { game: 100, ev: 1040 },
        { game: 150, ev: -1893 },
        { game: 200, ev: -832 },
        { game: 250, ev: -237 },
        { game: 300, ev: 467 },
        { game: 350, ev: -2333 },
        { game: 400, ev: -1632 },
        { game: 450, ev: -774 },
        { game: 500, ev: 241 },
        { game: 550, ev: 1452 },
        { game: 600, ev: 1839 },
        { game: 650, ev: 3031 },
        { game: 700, ev: 3970 },
        { game: 750, ev: 4776 },
        { game: 800, ev: 5666 },
        { game: 850, ev: 6396 },
        { game: 900, ev: 6967 },
        { game: 999, ev: 7500 }, // 900G以降はデータがないため仮の値
      ],
      '56sheets': [
        { game: 0, ev: -2120 },
        { game: 50, ev: -908 },
        { game: 100, ev: -50 },
        { game: 150, ev: -2993 },
        { game: 200, ev: -1930 },
        { game: 250, ev: -1339 },
        { game: 300, ev: -636 },
        { game: 350, ev: -3475 },
        { game: 400, ev: -2770 },
        { game: 450, ev: -1914 },
        { game: 500, ev: -605 },
        { game: 550, ev: 306 },
        { game: 600, ev: 680 },
        { game: 650, ev: 1862 },
        { game: 700, ev: 2800 },
        { game: 750, ev: 3302 },
        { game: 800, ev: 4477 },
        { game: 850, ev: 4495 },
        { game: 900, ev: 5797 },
        { game: 999, ev: 6500 }, // 900G以降はデータがないため仮の値
      ],
    },
    afterSingle: { // 前回駆け抜け_前回獲得：50枚以下 (スクリーンショット「期待値(枚)」を反映)
      'equal': [
        { game: 0, ev: -41 },
        { game: 50, ev: 1220 },
        { game: 100, ev: 2219 },
        { game: 150, ev: 709 },
        { game: 200, ev: 1890 },
        { game: 250, ev: 2808 },
        { game: 300, ev: 3966 },
        { game: 350, ev: 3281 },
        { game: 400, ev: 4387 },
        { game: 450, ev: 5596 },
        { game: 500, ev: 6709 },
        { game: 550, ev: 7500 }, // 500G以降はデータがないため仮の値
        { game: 600, ev: 8500 }, // 500G以降はデータがないため仮の値
        { game: 650, ev: 9500 }, // 500G以降はデータがないため仮の値
        { game: 700, ev: 10500 }, // 500G以降はデータがないため仮の値
        { game: 750, ev: 11500 }, // 500G以降はデータがないため仮の値
        { game: 800, ev: 12500 }, // 500G以降はデータがないため仮の値
        { game: 850, ev: 13500 }, // 500G以降はデータがないため仮の値
        { game: 900, ev: 14500 }, // 500G以降はデータがないため仮の値
        { game: 950, ev: 15500 }, // 500G以降はデータがないため仮の値
        { game: 999, ev: 16500 }, // 500G以降はデータがないため仮の値
      ],
      '56sheets': [
        { game: 0, ev: -1145 },
        { game: 50, ev: 119 },
        { game: 100, ev: 1118 },
        { game: 150, ev: -397 },
        { game: 200, ev: 787 },
        { game: 250, ev: 1705 },
        { game: 300, ev: 2854 },
        { game: 350, ev: 2137 },
        { game: 400, ev: 3236 },
        { game: 450, ev: 4451 },
        { game: 500, ev: 5566 },
        { game: 550, ev: 6000 }, // 500G以降はデータがないため仮の値
        { game: 600, ev: 6500 }, // 500G以降はデータがないため仮の値
        { game: 650, ev: 7000 }, // 500G以降はデータがないため仮の値
        { game: 700, ev: 7500 }, // 500G以降はデータがないため仮の値
        { game: 750, ev: 8000 }, // 500G以降はデータがないため仮の値
        { game: 800, ev: 8500 }, // 500G以降はデータがないため仮の値
        { game: 850, ev: 9000 }, // 500G以降はデータがないため仮の値
        { game: 900, ev: 9500 }, // 500G以降はデータがないため仮の値
        { game: 950, ev: 10000 }, // 500G以降はデータがないため仮の値
        { game: 999, ev: 10500 }, // 500G以降はデータがないため仮の値
      ],
    },
    afterST: { // 朝イチ・その他変動不問 (スクリーンショット「期待値(枚)」を反映)
      'equal': [
        { game: 0, ev: 110 },
        { game: 50, ev: 1332 },
        { game: 100, ev: 2434 },
        { game: 150, ev: 713 },
        { game: 200, ev: 1758 },
        { game: 250, ev: 2536 },
        { game: 300, ev: 3555 },
        { game: 350, ev: 3204 },
        { game: 400, ev: 4296 },
        { game: 450, ev: 5549 },
        { game: 500, ev: 6693 },
        { game: 550, ev: 7500 }, // 500G以降はデータがないため仮の値
        { game: 600, ev: 8500 }, // 500G以降はデータがないため仮の値
        { game: 650, ev: 9500 }, // 500G以降はデータがないため仮の値
        { game: 700, ev: 10500 }, // 500G以降はデータがないため仮の値
        { game: 750, ev: 11500 }, // 500G以降はデータがないため仮の値
        { game: 800, ev: 12500 }, // 500G以降はデータがないため仮の値
        { game: 850, ev: 13500 }, // 500G以降はデータがないため仮の値
        { game: 900, ev: 14500 }, // 500G以降はデータがないため仮の値
        { game: 950, ev: 15500 }, // 500G以降はデータがないため仮の値
        { game: 999, ev: 16500 }, // 500G以降はデータがないため仮の値
      ],
      '56sheets': [
        { game: 0, ev: -1010 },
        { game: 50, ev: 214 },
        { game: 100, ev: 1309 },
        { game: 150, ev: -427 },
        { game: 200, ev: 624 },
        { game: 250, ev: 1407 },
        { game: 300, ev: 2434 },
        { game: 350, ev: 2056 },
        { game: 400, ev: 3149 },
        { game: 450, ev: 4403 },
        { game: 500, ev: 5551 },
        { game: 550, ev: 6000 }, // 500G以降はデータがないため仮の値
        { game: 600, ev: 6500 }, // 500G以降はデータがないため仮の値
        { game: 650, ev: 7000 }, // 500G以降はデータがないため仮の値
        { game: 700, ev: 7500 }, // 500G以降はデータがないため仮の値
        { game: 750, ev: 8000 }, // 500G以降はデータがないため仮の値
        { game: 800, ev: 8500 }, // 500G以降はデータがないため仮の値
        { game: 850, ev: 9000 }, // 500G以降はデータがないため仮の値
        { game: 900, ev: 9500 }, // 500G以降はデータがないため仮の値
        { game: 950, ev: 10000 }, // 500G以降はデータがないため仮の値
        { game: 999, ev: 10500 }, // 500G以降はデータがないため仮の値
      ],
    },
  };

  function calculateEV() {
    if (gameCount < 0 || gameCount > 999) {
      alert("ゲーム数は0〜999で入力してください。");
      return;
    }
    const table = evTables[state][exchangeRate];
    if (!table || table.length === 0) {
      alert("選択された状態と交換率の期待値データがありません。");
      setEv(null);
      return;
    }
    let lower = table[0];
    let upper = table[table.length - 1];
    for (let i = 0; i < table.length - 1; i++) {
      if (table[i].game <= gameCount && gameCount <= table[i + 1].game) {
        lower = table[i];
        upper = table[i + 1];
        break;
      }
    }
    const proportion = (gameCount - lower.game) / (upper.game - lower.game || 1);
    const interpolatedEV = lower.ev + proportion * (upper.ev - lower.ev);
    setEv(interpolatedEV);
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">スマスロ ゴッドイーターR 状態・交換率別期待値計算</h1>

      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
        <label className="block mb-2 font-semibold text-lg">状態を選択</label>
        <select
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="border p-3 rounded w-full mb-4 text-lg"
        >
          <option value="normal">通常時 (前回駆け抜け以外/獲得100～900枚)</option>
          <option value="afterSingle">前回単発後 (獲得50枚以下)</option>
          <option value="afterST">リセット (朝イチ・その他変動不問)</option>
        </select>

        <label className="block mb-2 font-semibold text-lg">交換率を選択</label>
        <select
          value={exchangeRate}
          onChange={(e) => setExchangeRate(e.target.value)}
          className="border p-3 rounded w-full mb-4 text-lg"
        >
          <option value="equal">等価交換</option>
          <option value="56sheets">56枚交換</option>
        </select>

        <label className="block mb-2 font-semibold text-lg">打ち始めゲーム数（0〜999）</label>
        <input
          type="number"
          inputMode="numeric"
          pattern="\d*"
          value={gameCount}
          onChange={(e) => setGameCount(Number(e.target.value))}
          onFocus={(e) => e.target.select()}
          onKeyDown={(e) => { if (e.key === "Enter") calculateEV(); }}
          onWheel={(e) => e.currentTarget.blur()}
          className="border p-4 rounded w-full mb-4 text-lg"
          min={0}
          max={999}
        />

        <button
          onClick={calculateEV}
          className="bg-blue-600 text-white rounded py-4 w-full hover:bg-blue-700 text-lg transition"
        >
          期待値を計算する
        </button>

        {ev !== null && (
          <div className="mt-6 bg-green-100 p-4 rounded text-center text-2xl font-bold">
            推定期待値：{ev.toFixed(1)} 枚
          </div>
        )}
      </div>
    </div>
  );
}