// Mapa do Brasil dos núcleos (SVG estático + marcadores em %), usado em
// Início, Proposta do Projeto e Núcleos pelo Brasil.
// Substitui o antigo globo 3D em amCharts: o projeto só existe no Brasil,
// então um globo do mundo não fazia tanto sentido — só o contorno do país.
// Cada marcador, ao ser clicado, abre um card de prévia (estilo CodePen) com
// um link direto para a página de Eventos filtrada por aquele núcleo.

// Contorno real do Brasil (projeção equirretangular simples, corrigida pelo
// cosseno da latitude média do país) num viewBox de 640 x 656.9.
const CONTORNO_BRASIL = "M 266.75,597.09 L 288.50,574.13 L 306.90,557.78 L 317.85,550.93 L 331.57,541.65 L 331.91,528.20 L 323.73,518.48 L 315.65,521.71 L 318.85,511.99 L 321.06,502.03 L 321.07,492.77 L 315.20,489.72 L 309.09,492.44 L 303.01,491.69 L 301.10,485.21 L 299.59,469.78 L 296.53,464.75 L 285.52,460.20 L 278.87,463.49 L 261.66,460.26 L 262.74,437.40 L 257.92,428.04 L 263.02,424.56 L 261.45,414.96 L 265.92,407.59 L 268.81,394.32 L 264.96,383.86 L 256.06,379.13 L 254.31,372.48 L 256.70,362.76 L 225.45,362.06 L 219.18,342.46 L 223.94,342.18 L 223.72,334.92 L 220.54,330.00 L 219.82,320.27 L 210.36,315.27 L 200.10,315.44 L 193.35,310.55 L 182.33,307.21 L 175.92,300.92 L 157.66,298.14 L 139.96,283.06 L 141.27,271.77 L 139.26,265.30 L 141.00,252.68 L 119.67,255.53 L 111.08,261.85 L 96.82,268.68 L 93.19,273.77 L 84.79,274.14 L 72.67,272.71 L 63.47,275.61 L 56.06,273.68 L 57.15,248.10 L 43.77,258.02 L 29.38,257.59 L 23.22,248.61 L 12.40,247.63 L 15.84,240.40 L 6.78,230.16 L 0.00,214.99 L 4.30,211.91 L 4.28,204.80 L 14.14,199.94 L 12.51,190.84 L 16.67,184.98 L 17.86,177.12 L 36.50,165.66 L 49.86,162.42 L 52.05,159.89 L 66.74,160.68 L 74.07,114.51 L 74.45,107.21 L 71.90,97.57 L 64.67,91.42 L 64.75,79.19 L 73.93,76.42 L 77.19,78.16 L 77.74,71.71 L 68.19,69.97 L 67.99,59.43 L 99.75,59.81 L 105.14,54.01 L 109.67,59.35 L 112.85,69.28 L 115.93,67.20 L 124.90,76.11 L 137.58,75.02 L 140.73,69.86 L 152.86,65.93 L 159.57,63.17 L 161.46,56.04 L 173.11,51.25 L 172.23,47.71 L 158.42,46.26 L 156.15,35.66 L 156.81,24.37 L 149.52,20.00 L 152.57,18.45 L 164.64,20.61 L 177.60,24.82 L 182.31,20.84 L 194.03,18.22 L 212.27,11.92 L 218.23,5.50 L 216.07,0.74 L 224.55,0.00 L 228.34,3.88 L 226.22,11.27 L 231.82,13.82 L 235.56,21.65 L 231.04,27.58 L 228.45,41.91 L 232.62,50.43 L 233.80,58.22 L 243.83,66.12 L 251.83,66.95 L 253.63,63.66 L 258.79,62.93 L 266.16,59.98 L 271.46,55.50 L 280.48,56.93 L 284.45,56.32 L 293.31,57.70 L 294.78,54.26 L 292.05,50.91 L 293.68,46.04 L 300.26,47.53 L 307.95,45.81 L 317.29,49.38 L 324.41,52.85 L 329.46,48.29 L 333.10,48.99 L 335.33,53.73 L 343.13,52.53 L 349.38,46.13 L 354.39,33.73 L 364.03,18.32 L 369.58,17.53 L 373.62,26.84 L 382.76,56.29 L 391.48,59.07 L 391.92,70.69 L 379.66,84.55 L 384.73,89.63 L 413.55,92.27 L 414.13,109.15 L 426.52,98.10 L 447.03,104.15 L 474.11,114.44 L 482.07,124.30 L 479.39,133.62 L 498.35,128.43 L 530.08,137.34 L 554.43,136.68 L 578.53,150.62 L 599.35,169.48 L 611.91,174.34 L 625.85,175.01 L 631.76,180.33 L 637.29,201.76 L 640.00,211.95 L 633.51,239.79 L 625.21,250.78 L 602.23,274.21 L 591.85,293.25 L 579.78,307.84 L 575.70,308.17 L 571.15,320.56 L 572.31,352.11 L 567.76,378.06 L 566.03,389.16 L 560.87,395.81 L 557.98,418.32 L 541.45,440.30 L 538.68,457.69 L 525.49,464.99 L 521.67,475.08 L 503.96,475.04 L 478.31,481.51 L 466.83,489.00 L 448.57,493.92 L 429.39,507.32 L 415.59,524.03 L 413.21,536.60 L 415.92,545.90 L 412.88,562.91 L 409.18,571.12 L 397.78,580.39 L 379.70,610.02 L 365.36,623.38 L 354.28,631.26 L 346.84,647.27 L 336.06,656.90 L 331.54,647.36 L 338.73,639.38 L 329.30,627.92 L 316.51,618.61 L 299.74,607.83 L 293.68,608.32 L 277.33,595.29 L 266.75,597.09 Z";

const CONTORNO_ESTADOS = "M 6.2,209.6 L 59.0,225.4 L 120.0,255.6 L 88.8,275.4 L 54.9,273.5 L 56.9,247.0 L 45.0,256.2 L 29.5,256.7 L 26.6,248.2 L 12.6,246.8 L 17.1,239.7 L 0.0,215.6 L 6.2,209.6 Z M 628.0,236.9 L 632.6,239.5 L 612.9,265.1 L 582.8,245.4 L 590.6,237.4 L 603.9,246.3 L 628.0,236.9 Z M 108.6,54.1 L 112.5,68.7 L 125.0,75.6 L 137.0,71.3 L 137.7,77.4 L 144.8,68.8 L 157.3,65.3 L 162.8,55.0 L 176.8,51.7 L 183.9,55.6 L 188.2,71.9 L 192.4,93.9 L 187.1,101.1 L 197.1,111.8 L 204.0,114.9 L 202.3,103.6 L 208.2,96.7 L 217.1,103.4 L 223.0,100.5 L 227.4,83.9 L 246.0,83.9 L 255.4,107.6 L 282.2,125.6 L 291.6,122.4 L 252.8,201.1 L 258.4,212.1 L 253.9,236.4 L 195.7,237.8 L 181.9,222.9 L 169.0,222.5 L 160.4,239.2 L 149.1,239.7 L 145.1,247.0 L 133.6,249.7 L 123.6,246.7 L 117.1,253.6 L 59.0,225.4 L 3.0,208.0 L 13.9,197.7 L 19.1,174.3 L 52.6,158.3 L 65.6,160.7 L 74.9,107.3 L 64.1,91.4 L 64.3,78.9 L 79.4,77.6 L 77.2,70.5 L 67.5,70.0 L 67.6,59.3 L 95.1,59.1 L 94.6,55.0 L 98.6,57.5 L 107.3,50.5 L 108.6,54.1 Z M 371.8,20.8 L 379.6,52.3 L 392.3,59.6 L 392.8,68.3 L 357.3,109.1 L 343.2,90.7 L 335.2,67.4 L 313.7,58.4 L 311.6,47.3 L 343.1,51.8 L 365.8,13.8 L 371.8,20.8 Z M 565.7,232.5 L 581.9,240.2 L 591.0,262.3 L 582.9,271.9 L 589.7,282.2 L 597.4,281.3 L 585.9,301.0 L 570.9,312.1 L 572.7,355.4 L 568.2,386.1 L 559.5,397.3 L 543.9,381.4 L 556.4,359.8 L 550.3,354.4 L 532.4,353.4 L 524.7,342.6 L 502.3,335.0 L 496.5,337.8 L 485.5,328.0 L 455.0,345.3 L 457.8,330.0 L 451.9,325.7 L 455.6,311.8 L 451.1,312.3 L 454.4,305.8 L 449.8,291.0 L 454.9,284.0 L 446.2,278.4 L 462.7,258.5 L 468.5,270.5 L 486.7,267.4 L 497.3,244.3 L 509.0,250.2 L 536.0,234.9 L 543.9,248.0 L 565.7,232.5 Z M 553.8,136.1 L 598.9,169.7 L 592.6,171.2 L 577.3,194.0 L 574.2,206.1 L 578.0,211.1 L 571.0,220.4 L 559.6,211.4 L 545.1,212.8 L 548.0,202.9 L 541.2,198.1 L 539.0,175.5 L 533.7,170.3 L 532.5,137.5 L 553.8,136.1 Z M 542.3,439.2 L 538.5,447.0 L 526.1,444.0 L 523.8,431.2 L 538.6,416.2 L 535.2,396.6 L 545.7,389.6 L 559.4,396.8 L 559.2,413.4 L 542.3,439.2 Z M 388.5,297.3 L 386.3,304.5 L 401.3,311.8 L 405.4,303.7 L 414.1,312.5 L 420.8,309.7 L 428.9,315.1 L 429.6,309.0 L 433.0,312.1 L 454.4,305.8 L 451.9,325.7 L 457.8,330.0 L 454.8,339.8 L 448.1,335.9 L 447.9,341.9 L 441.3,341.7 L 443.0,355.8 L 434.8,358.3 L 433.2,349.3 L 420.4,349.3 L 419.1,358.6 L 435.0,358.7 L 432.5,366.2 L 437.9,374.2 L 431.2,382.2 L 435.4,392.4 L 424.4,399.8 L 408.4,396.5 L 386.0,403.1 L 377.3,416.6 L 343.6,402.2 L 346.1,397.3 L 340.5,396.7 L 338.1,383.5 L 347.3,362.8 L 373.4,339.5 L 388.5,297.3 Z M 439.5,239.6 L 448.7,224.1 L 439.3,223.9 L 427.7,209.4 L 433.8,193.9 L 431.8,181.3 L 417.7,175.3 L 411.4,178.4 L 438.5,153.2 L 453.8,108.9 L 458.8,105.9 L 465.3,114.3 L 467.4,110.5 L 466.8,117.5 L 475.5,112.1 L 483.6,130.4 L 495.2,125.7 L 524.4,134.1 L 505.4,159.4 L 506.5,200.6 L 488.3,202.1 L 465.1,217.5 L 456.4,238.6 L 457.1,261.0 L 449.0,258.0 L 439.5,239.6 Z M 485.5,328.1 L 496.5,337.8 L 502.3,335.0 L 524.7,342.6 L 532.4,353.4 L 555.5,357.7 L 543.9,381.4 L 551.2,389.0 L 535.2,396.6 L 538.7,416.0 L 531.6,428.2 L 524.0,430.6 L 517.1,453.9 L 450.6,474.0 L 444.5,463.9 L 448.0,449.8 L 439.8,449.0 L 432.3,424.4 L 410.2,427.8 L 409.0,432.5 L 403.0,424.4 L 383.4,421.3 L 374.8,426.5 L 374.0,420.5 L 386.0,403.1 L 408.4,396.5 L 424.4,399.8 L 435.4,392.4 L 431.2,381.1 L 437.9,374.2 L 432.5,365.9 L 435.1,358.0 L 443.0,355.8 L 441.2,341.9 L 447.9,341.9 L 448.1,335.9 L 456.2,339.2 L 455.0,345.3 L 485.5,328.1 Z M 327.9,390.1 L 341.0,392.0 L 340.5,396.7 L 346.1,397.3 L 343.6,402.2 L 373.7,413.7 L 374.8,426.5 L 351.8,461.1 L 332.2,474.9 L 324.1,491.8 L 303.7,492.3 L 295.7,463.5 L 260.5,459.5 L 263.6,440.9 L 257.9,428.0 L 262.9,424.6 L 258.5,421.0 L 269.5,395.3 L 264.0,383.9 L 269.6,389.7 L 292.5,377.4 L 306.9,385.4 L 320.9,385.7 L 330.6,378.4 L 327.9,390.1 Z M 222.1,312.2 L 231.7,296.1 L 226.3,287.7 L 229.4,279.4 L 220.5,273.3 L 202.8,273.3 L 202.2,236.5 L 253.9,236.4 L 258.4,212.0 L 267.1,235.5 L 280.8,246.7 L 387.4,254.0 L 379.0,280.8 L 382.9,305.2 L 373.4,339.5 L 347.3,362.8 L 338.6,379.6 L 340.9,392.1 L 326.6,390.0 L 330.6,378.4 L 324.5,385.0 L 307.3,385.5 L 291.4,377.4 L 269.4,389.7 L 254.2,377.6 L 255.4,362.2 L 225.2,362.2 L 218.8,342.7 L 224.1,342.5 L 221.8,323.8 L 216.4,318.7 L 222.1,312.2 Z M 440.8,100.7 L 455.1,105.5 L 451.7,124.6 L 430.5,164.4 L 411.4,178.4 L 421.4,182.6 L 419.9,188.4 L 403.9,205.0 L 404.0,226.0 L 387.4,254.0 L 280.8,246.7 L 267.1,235.5 L 252.8,201.1 L 291.7,122.6 L 282.2,125.6 L 253.6,105.6 L 246.4,94.1 L 246.0,67.6 L 272.0,54.6 L 293.3,57.5 L 293.6,45.7 L 310.3,44.8 L 313.7,58.4 L 335.2,67.4 L 343.2,90.7 L 356.8,109.0 L 388.5,76.4 L 390.1,82.6 L 417.1,92.7 L 416.0,96.7 L 440.8,100.7 Z M 599.3,189.9 L 595.1,201.3 L 607.6,205.9 L 612.9,194.3 L 636.1,197.5 L 638.4,215.4 L 627.4,213.8 L 603.3,228.1 L 597.2,222.6 L 603.3,214.3 L 599.2,210.8 L 585.4,220.2 L 577.0,218.9 L 577.0,195.7 L 584.8,198.1 L 599.3,189.9 Z M 600.1,211.4 L 603.3,214.3 L 597.2,222.6 L 603.1,228.1 L 627.4,213.8 L 638.2,215.3 L 633.1,238.4 L 621.0,237.4 L 603.8,246.3 L 590.6,237.4 L 582.8,245.4 L 578.9,237.3 L 564.1,232.0 L 543.9,248.0 L 539.1,237.1 L 531.9,234.9 L 544.5,225.3 L 545.1,212.8 L 559.6,211.4 L 568.9,220.6 L 575.0,216.6 L 585.4,220.2 L 600.1,211.4 Z M 525.7,135.5 L 533.6,138.9 L 533.7,170.3 L 539.0,175.5 L 541.2,198.1 L 548.0,202.9 L 542.5,214.1 L 544.5,225.3 L 524.1,243.9 L 509.0,250.2 L 497.1,244.4 L 487.7,266.5 L 468.5,270.5 L 462.9,258.5 L 457.0,260.4 L 456.4,238.6 L 464.6,218.4 L 488.3,202.1 L 506.5,200.6 L 505.4,159.4 L 525.7,135.5 Z M 357.4,467.7 L 395.5,477.4 L 402.3,503.6 L 414.2,503.7 L 414.5,510.6 L 423.3,513.1 L 413.9,525.8 L 398.3,530.1 L 381.7,526.2 L 368.1,538.2 L 333.2,531.0 L 327.6,519.7 L 316.2,519.2 L 320.2,494.8 L 332.2,474.9 L 357.4,467.7 Z M 480.5,480.5 L 474.6,479.8 L 475.8,475.6 L 486.3,470.2 L 475.9,465.3 L 517.1,453.9 L 523.5,438.0 L 526.1,444.0 L 538.5,447.0 L 538.0,458.8 L 522.1,467.7 L 521.3,475.5 L 504.3,475.3 L 503.8,470.1 L 496.2,476.9 L 482.2,474.6 L 477.5,477.3 L 480.5,480.5 Z M 600.5,171.4 L 627.6,175.2 L 636.1,197.5 L 612.9,194.3 L 607.6,205.9 L 595.1,201.3 L 600.2,190.1 L 584.8,198.1 L 577.3,195.2 L 592.6,171.2 L 600.5,171.4 Z M 122.7,254.6 L 117.1,253.6 L 123.6,246.7 L 144.2,247.4 L 149.1,239.7 L 160.5,239.1 L 169.0,222.5 L 181.3,222.6 L 193.4,236.5 L 204.1,238.5 L 202.8,273.3 L 228.3,275.4 L 226.3,287.7 L 231.7,296.1 L 216.5,318.9 L 198.0,316.4 L 176.6,300.7 L 158.1,298.8 L 146.0,290.3 L 140.6,277.7 L 140.4,251.6 L 122.7,254.6 Z M 229.4,35.3 L 232.1,57.1 L 246.2,67.1 L 246.0,83.9 L 227.4,83.9 L 219.4,103.0 L 210.3,96.7 L 204.7,99.0 L 203.9,114.9 L 187.1,101.1 L 192.4,93.9 L 183.9,55.6 L 162.3,46.7 L 159.8,28.3 L 149.4,16.7 L 163.4,23.2 L 175.8,21.8 L 179.8,27.6 L 183.3,20.3 L 211.8,12.2 L 218.4,5.3 L 216.2,0.4 L 224.7,-0.4 L 225.4,12.4 L 233.1,14.5 L 235.9,21.7 L 229.4,35.3 Z M 357.7,619.9 L 348.1,646.1 L 335.4,656.6 L 335.0,646.8 L 340.1,640.4 L 346.4,641.4 L 348.3,629.5 L 340.9,638.2 L 335.8,637.0 L 300.1,607.5 L 293.1,611.6 L 280.1,595.2 L 266.5,596.6 L 312.6,551.8 L 327.8,545.1 L 355.7,547.5 L 380.9,566.4 L 396.1,570.2 L 388.4,580.8 L 395.8,582.1 L 378.5,612.1 L 357.1,629.8 L 356.9,624.4 L 370.5,618.4 L 381.8,601.4 L 381.3,596.7 L 375.9,600.8 L 369.9,593.5 L 373.2,599.9 L 357.7,619.9 Z M 330.4,535.5 L 337.6,530.2 L 368.1,538.2 L 381.7,526.2 L 398.3,530.1 L 414.0,525.7 L 411.6,568.3 L 390.0,582.3 L 394.9,567.5 L 380.9,566.4 L 355.7,547.5 L 328.8,545.9 L 330.4,535.5 Z M 417.0,549.5 L 414.6,557.1 L 417.0,549.5 Z M 587.3,248.8 L 612.9,265.1 L 594.6,282.7 L 582.9,271.9 L 591.0,262.3 L 587.3,248.8 Z M 454.0,490.0 L 422.1,514.5 L 419.6,508.9 L 414.5,510.6 L 414.2,503.7 L 402.3,503.6 L 404.1,498.2 L 391.3,473.8 L 340.4,468.8 L 381.9,421.9 L 403.0,424.4 L 409.0,432.5 L 410.2,427.8 L 432.3,424.4 L 439.8,449.0 L 448.0,449.8 L 444.5,463.9 L 450.6,474.0 L 475.7,465.6 L 486.3,470.2 L 466.0,489.4 L 454.0,490.0 Z M 439.4,239.6 L 450.4,259.6 L 461.2,259.5 L 446.2,278.4 L 454.9,284.0 L 449.8,290.8 L 454.4,305.8 L 433.0,312.1 L 429.6,309.0 L 428.9,315.1 L 420.8,309.7 L 414.1,312.5 L 409.7,303.9 L 401.3,311.8 L 386.3,304.5 L 388.7,297.0 L 380.9,304.2 L 381.2,267.8 L 403.0,228.8 L 403.9,205.0 L 417.4,195.7 L 421.5,183.2 L 411.4,178.4 L 417.7,175.3 L 431.8,181.3 L 433.8,193.9 L 427.7,209.4 L 439.3,223.9 L 448.7,224.1 L 439.4,239.6 Z M 434.9,358.3 L 419.1,358.6 L 420.4,349.3 L 433.2,349.3 L 434.9,358.3 Z";

const VIEWBOX_LARGURA = 640;
const VIEWBOX_ALTURA = 656.9;
const LATITUDE_MEDIA_BR = -14.5;

// Converte lat/lng para uma posição em % dentro do mapa — a mesma projeção
// usada para desenhar o contorno acima, então os pontos caem no lugar certo.
function coordParaPercentual(lat, lng) {
    const escalaX = Math.cos(LATITUDE_MEDIA_BR * Math.PI / 180);
    const x = lng * escalaX;
    const y = -lat;

    // Bounding box dos dados de origem (mesmo cálculo usado para gerar o contorno)
    const xMin = -73.987235 * escalaX;
    const xMax = -34.729993 * escalaX;
    const yMin = -5.244486;
    const yMax = 33.768378;

    const px = (x - xMin) / (xMax - xMin) * 100;
    const py = (y - yMin) / (yMax - yMin) * 100;
    return { left: px, top: py };
}

// Monta o filtro de ano (mesmo estilo do filtro de parceiros) acima do mapa e
// re-renderiza o mapa + os cards toda vez que o ano selecionado muda.
export function iniciarFiltroAnoMapa(filtroId, mapaId, cardsId, projetos) {

    const filtroEl = document.getElementById(filtroId);

    if (!filtroEl) {
        iniciarMapaBrasil(mapaId, cardsId, projetos);
        return;
    }

    const anos = [...new Set(projetos.flatMap(p => p.anos || []))].sort();
    const anoInicial = anos[anos.length - 1];

    function renderizar(ano) {
        const filtrados = projetos.filter(p => (p.anos || []).includes(ano));
        iniciarMapaBrasil(mapaId, cardsId, filtrados);
    }

    filtroEl.innerHTML = anos.map(ano => `
        <button type="button" class="mapa-ano-btn${ano === anoInicial ? " ativo" : ""}" data-ano="${ano}">
            ${ano}
        </button>
    `).join("");

    filtroEl.querySelectorAll(".mapa-ano-btn").forEach(botao => {
        botao.addEventListener("click", () => {
            filtroEl.querySelectorAll(".mapa-ano-btn").forEach(b => b.classList.remove("ativo"));
            botao.classList.add("ativo");
            renderizar(botao.dataset.ano);
        });
    });

    renderizar(anoInicial);
}

export function iniciarMapaBrasil(mapaId, cardsId, projetos) {

    const container = document.getElementById(mapaId);
    if (!container) return;

    // ─── SVG do contorno + marcadores em % ──────────────────
    container.innerHTML = `
        <svg class="mapa-brasil-svg" viewBox="0 0 ${VIEWBOX_LARGURA} ${VIEWBOX_ALTURA}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path class="mapa-brasil-contorno" d="${CONTORNO_BRASIL}" />
            <path class="mapa-brasil-estados" d="${CONTORNO_ESTADOS}" />
        </svg>
        <ul class="mapa-brasil-marcadores">
            ${projetos.map((p, i) => {
                const pos = coordParaPercentual(p.lat, p.lng);
                return `
                <li class="mapa-brasil-marcador" style="left:${pos.left.toFixed(2)}%; top:${pos.top.toFixed(2)}%;">
                    <button type="button" class="mapa-brasil-pino" data-nucleo="${i}" aria-label="${p.nome}"></button>
                    <div class="mapa-brasil-info">
                        <div class="mapa-brasil-info-inner animate animate--bounce-in">
                            <header class="mapa-brasil-info-header">
                                <h3>${p.nome}</h3>
                                <span>${p.local}</span>
                            </header>
                            <main class="mapa-brasil-info-main">
                                <p>${p.resumo}</p>
                                <a class="mapa-brasil-info-link" href="/eventos?nucleo=${encodeURIComponent(p.nucleoEventos)}">
                                    Ver eventos deste núcleo <i class="fa-solid fa-arrow-right"></i>
                                </a>
                            </main>
                        </div>
                    </div>
                </li>`;
            }).join("")}
        </ul>
    `;

    // ─── Clique no pino abre/fecha o card de prévia (funciona em toque e mouse) ───
    const pinos = container.querySelectorAll(".mapa-brasil-pino");
    pinos.forEach(pino => {
        pino.addEventListener("click", (evento) => {
            evento.stopPropagation();
            const marcadorAtual = pino.closest(".mapa-brasil-marcador");
            const jaAberto = marcadorAtual.classList.contains("aberto");

            container.querySelectorAll(".mapa-brasil-marcador.aberto")
                .forEach(m => m.classList.remove("aberto"));

            if (!jaAberto) marcadorAtual.classList.add("aberto");
        });
    });

    document.addEventListener("click", () => {
        container.querySelectorAll(".mapa-brasil-marcador.aberto")
            .forEach(m => m.classList.remove("aberto"));
    });

    document.addEventListener("keydown", (evento) => {
        if (evento.key === "Escape") {
            container.querySelectorAll(".mapa-brasil-marcador.aberto")
                .forEach(m => m.classList.remove("aberto"));
        }
    });

    // ─── Cards ao lado (idêntico ao usado com o globo) ──────
    const tons = ["tom-a", "tom-b", "tom-c"];

    const cardsEl = document.getElementById(cardsId);
    if (cardsEl) {
        cardsEl.innerHTML = projetos.map((p, i) => {

            // Só usa a imagem do núcleo se for uma foto real — os núcleos
            // que ainda não têm foto usam um placehold.co no campo "imagem",
            // e pra esses mantém o gradiente de cor de sempre.
            const temFoto = p.imagem && !p.imagem.includes("placehold.co");
            const estiloFoto = temFoto ? `style="background-image:url('${p.imagem}')"` : "";

            return `
                <a class="card-nucleo ${tons[i % tons.length]} ${temFoto ? "tem-foto" : ""}" ${estiloFoto} href="/eventos?nucleo=${encodeURIComponent(p.nucleoEventos)}">
                    <span class="card-nucleo-orbita">
                        <span class="card-nucleo-orb"></span>
                        <span class="card-nucleo-orb"></span>
                        <span class="card-nucleo-pin"><i class="fa-solid fa-location-dot"></i></span>
                    </span>
                    <span class="card-nucleo-vidro"></span>
                    <span class="card-nucleo-conteudo">
                        <span class="card-nucleo-local">${p.local}</span>
                        <h3>${p.nome}</h3>
                        <p>${p.resumo}</p>
                    </span>
                    <span class="card-nucleo-seta"><i class="fa-solid fa-arrow-right"></i></span>
                </a>
            `;
        }).join("");
    }
}