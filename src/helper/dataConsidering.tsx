export interface SubTab {
	label: string;
	title: string;
	content: React.ReactNode;
}

export interface MainTab {
	label: string;
}

export const MAIN_TABS: MainTab[] = [
	{ label: 'システム概要' },
	{ label: '便利機能' },
	{ label: '導入イメージ' },
];

export const SUB_TABS: SubTab[] = [
	{
		label: '管理者機能',
		title: 'ファイル利用権限',
		content: (
			<>
				<p>どのファイルをユーザーやグループに公開するかが設定できます。<br className="pc" />ファイルだけでなくレコードや項目単位まで利用制御が可能です。<br className="pc" />また、ファイルを結合して、ユーザーに結合済みの状態で公開することも可能です。</p>
				<div className="considering-block__file-img considering-block__file-img--scroll">
					<div className="js-scroll-hint">
						<picture>
							<source srcSet="../../assets/img/webp/index/block-02-tab1-img01.webp" type="image/webp" />
							<img src="../../assets/img/index/block-02-tab1-img01.png" alt="ファイル利用権限" />
						</picture>
					</div>
				</div>
				<div className="considering-block__file-note c-txt__basic">
					<div className="considering-block__file-left">
						<p>操作ログやシステムログを追うことが可能なため、<br className="pc" />ユーザーの使い方など内部統制を見据えて活用できます。</p>
						<div className="considering-block__file-log">
							<div className="considering-block__file-log-left">
								<h4 className="considering-block__file-log-ttl">操作ログ</h4>
								<ul>
									<li>操作日時</li>
									<li>ユーザー</li>
									<li>操作種別</li>
									<li>対象</li>
									<li>操作内容</li>
									<li>結果</li>
									<li>ログレベル</li>
									<li>詳細</li>
									<li>IP アドレス</li>
								</ul>
							</div>
							<div className="considering-block__file-log-right">
								<h4 className="considering-block__file-log-ttl">システムログ</h4>
								<ul>
									<li>ログ日時</li>
									<li>ログレベル</li>
									<li>モジュール</li>
									<li>詳細</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="considering-block__file-right">
						<picture>
							<source srcSet="../../assets/img/webp/index/block-02-tab1-img02.webp" type="image/webp" />
							<img src="../../assets/img/index/block-02-tab1-img02.png" alt="メイン画面  ホストファイル選択画面" />
						</picture>
					</div>
				</div>
			</>
		),
	},
	{
		label: '定型抽出機能',
		title: '定型抽出機能',
		content: (
			<>
				<p>あらかじめ定型抽出画面を設定しておけば、条件設定だけで実行できます。<br className="pc" />この抽出画面を共有フォルダに公開し、利用者は必要な条件だけを入力して<br className="pc" />最新データを入手することが可能になります。</p>
				<div className="considering-block__img">
					<picture>
						<source srcSet="../../assets/img/webp/index/block-02-tab2-sp.webp" media="(max-width:834px)" type="image/webp" />
						<source srcSet="../../assets/img/index/block-02-tab2-sp.png" media="(max-width:834px)" />
						<source srcSet="../../assets/img/webp/index/block-02-tab2.webp" type="image/webp" />
						<img src="../../assets/img/index/block-02-tab2.png" alt="定型抽出機能" />
					</picture>
				</div>
				<div className="c-txt__basic">
					<p>面倒な月次データの収集なども、ボタンをクリックするだけでOK!業務がサクサク進みます。</p>
				</div>
			</>
		),
	},
	{
		label: 'スケジュール機能',
		title: 'スケジュール機能',
		content: (
			<>
				<p>抽出によるユーザーファイルの作成処理やカタログ処理の実行を予約することができます。 <br />指定した日時に実行したり、毎日、毎週、毎月と定期的に実行することも可能です。</p>
				<div className="considering-block__note">スケジュールを登録しておくことで、<br />必要なデータがベストタイミングで届きます。</div>
				<div className="considering-block__img considering-block__img--custom">
					<picture>
						<source srcSet="../../assets/img/webp/index/block-02-tab3-sp.webp" media="(max-width:834px)" type="image/webp" />
						<source srcSet="../../assets/img/index/block-02-tab3-sp.png" media="(max-width:834px)" />
						<source srcSet="../../assets/img/webp/index/block-02-tab3.webp" type="image/webp" />
						<img src="../../assets/img/index/block-02-tab3.png" alt="スケジュール機能" />
					</picture>
				</div>
				<div className="c-txt__basic">
					<ul>
						<li>稼働日をカレンダーで確認することができます。</li>
						<li>管理者側で予約をスキップでき、<br />問題のある処理を未然に防ぐことも可能です。</li>
					</ul>
				</div>
			</>
		),
	},
];