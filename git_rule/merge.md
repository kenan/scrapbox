# Atlassian Tutorial

https://www.atlassian.com/ja/git/tutorials/merging-vs-rebasing

マージオプション
最も容易なオプションは、次のようなコマンドを使用して master ブランチをフィーチャーブランチにマージすることです。

git checkout feature
git merge master
または、これを 1 本の直線に凝縮することができます。

git merge feature master
これは、両方のブランチの履歴を連結する新しい「マージコミット」を feature ブランチに作成します。ブランチの構造は次のようになります。

![marge_image](02.svg "サンプル")

